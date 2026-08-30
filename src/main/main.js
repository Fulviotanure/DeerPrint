const { app, BrowserWindow, globalShortcut, ipcMain, clipboard, nativeImage, dialog, shell, Tray, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const Store = require('./store');
const { captureActiveDisplay } = require('./capture');
const { initUpdater } = require('./updater');

// Força o perfil de cores sRGB para garantir 100% de fidelidade com o Windows nativo
app.commandLine.appendSwitch('force-color-profile', 'srgb');

// Garantir instância única (se abrir de novo pelo atalho, restaura a já aberta)
const isPrimaryInstance = app.requestSingleInstanceLock();

if (!isPrimaryInstance) {
  app.quit();
} else {
  let store;
  let mainWindow = null;
  let snipWindow = null;
  let tray = null;
  let isCapturing = false;
  let isQuitting = false;

  app.on('second-instance', (event, commandLine) => {
    // Se a segunda instância foi disparada pelo autostart do Windows ou flag oculta, não abre a janela
    const isSecondHidden = Array.isArray(commandLine) && commandLine.some(arg => {
      const lower = String(arg).toLowerCase().trim();
      return [
        '--hidden', '-hidden', '/hidden',
        '--minimized', '-minimized', '/minimized',
        '--autostart', '-autostart', '/autostart',
        '--silent', '-silent', '/silent',
        '--background', '-background', '/background'
      ].includes(lower);
    });

    if (!isSecondHidden) {
      showMainWindow();
    }
  });

  function getAppIcon() {
    const iconPath = path.join(__dirname, '../assets/icon.png');
    if (fs.existsSync(iconPath)) {
      return nativeImage.createFromPath(iconPath);
    }
    return null;
  }

  function getTrayIcon() {
    const trayIconPath = path.join(__dirname, '../assets/tray-icon.png');
    if (fs.existsSync(trayIconPath)) {
      return nativeImage.createFromPath(trayIconPath);
    }
    return getAppIcon();
  }

  function createMainWindow(showImmediately = true) {
    if (mainWindow && !mainWindow.isDestroyed()) {
      if (showImmediately) {
        showMainWindow();
      }
      return mainWindow;
    }

    const appIcon = getAppIcon();

    mainWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
      show: false,
      icon: appIcon || undefined,
      backgroundColor: '#121412',
      title: 'DeerPrint - Editor & Capturas',
      webPreferences: {
        preload: path.join(__dirname, '../preload/editor-preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
        enableRemoteModule: false
      }
    });

    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

    // Conecta o gerenciador de atualizações à janela ativa
    initUpdater(mainWindow, store);

    if (showImmediately) {
      mainWindow.once('ready-to-show', () => {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.show();
          mainWindow.focus();
        }
      });
    }

    // Ao clicar em fechar (X), esconde para segundo plano (Bandeja / Tray) em vez de encerrar
    mainWindow.on('close', (event) => {
      if (!isQuitting) {
        event.preventDefault();
        mainWindow.hide();
        return false;
      }
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });

    return mainWindow;
  }

  function showMainWindow() {
    if (!mainWindow || mainWindow.isDestroyed()) {
      createMainWindow(true);
    } else {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
      mainWindow.focus();
    }
  }

  function applyAutoStart(enable) {
    try {
      if (app.isPackaged) {
        const appPath = process.execPath;
        app.setLoginItemSettings({
          openAtLogin: !!enable,
          openAsHidden: true,
          path: appPath,
          args: ['--hidden']
        });
      } else {
        // Em modo de desenvolvimento, garante que o electron.exe de desenvolvimento NUNCA seja registrado no Windows
        app.setLoginItemSettings({
          openAtLogin: false
        });
      }
    } catch (err) {
      console.warn('Erro ao configurar inicialização automática no Windows:', err);
    }
  }

  function cleanupLegacyAndDevStartupEntries() {
    // 1. Limpa chaves do registro de versões legadas e resíduos de dev
    try {
      const { exec } = require('child_process');
      const obsoleteKeys = ['electron.app.ScreenshotMark', 'electron.app.Electron', 'ScreenshotMark'];
      for (const key of obsoleteKeys) {
        exec(`reg delete "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "${key}" /f`, () => {});
      }
    } catch (e) {}

    // 2. Limpa atalhos legados do ScreenshotMark
    try {
      const desktopPath = app.getPath('desktop');
      const oldDesktopShortcut = path.join(desktopPath, 'ScreenshotMark.lnk');
      if (fs.existsSync(oldDesktopShortcut)) {
        try { fs.unlinkSync(oldDesktopShortcut); } catch (e) {}
      }

      const appData = process.env.APPDATA;
      if (appData) {
        const oldStartMenuShortcut = path.join(appData, 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'ScreenshotMark.lnk');
        if (fs.existsSync(oldStartMenuShortcut)) {
          try { fs.unlinkSync(oldStartMenuShortcut); } catch (e) {}
        }
        const oldStartMenuDir = path.join(appData, 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'ScreenshotMark');
        if (fs.existsSync(oldStartMenuDir)) {
          try { fs.rmSync(oldStartMenuDir, { recursive: true, force: true }); } catch (e) {}
        }
      }

      const localAppData = process.env.LOCALAPPDATA;
      if (localAppData) {
        const oldAppDir = path.join(localAppData, 'Programs', 'screenshotmark');
        if (fs.existsSync(oldAppDir)) {
          const uninstaller = path.join(oldAppDir, 'Uninstall ScreenshotMark.exe');
          if (fs.existsSync(uninstaller)) {
            const { spawn } = require('child_process');
            const child = spawn(uninstaller, ['/S', `_?=${oldAppDir}`], { detached: true, stdio: 'ignore' });
            child.unref();
          } else {
            try { fs.rmSync(oldAppDir, { recursive: true, force: true }); } catch (e) {}
          }
        }
      }
    } catch (e) {}
  }

  function updateTrayMenu() {
    if (!tray || tray.isDestroyed()) return;

    const currentHotkey = store ? (store.getSettings().hotkey || 'F10') : 'F10';
    const isAutoStart = store ? (store.getSettings().autoStart !== false) : true;

    const contextMenu = Menu.buildFromTemplate([
      {
        label: `📸 Capturar Tela (${currentHotkey})`,
        click: () => {
          startCaptureFlow();
        }
      },
      {
        label: '🖼️ Abrir Editor',
        click: () => {
          showMainWindow();
        }
      },
      {
        label: '📁 Abrir Pasta de Capturas',
        click: () => {
          const dir = store.getSettings().saveDirectory;
          store.ensureDirectory(dir);
          shell.openPath(dir);
        }
      },
      { type: 'separator' },
      {
        label: '🚀 Iniciar com o Windows',
        type: 'checkbox',
        checked: isAutoStart,
        click: (menuItem) => {
          store.saveSettings({ autoStart: menuItem.checked });
          applyAutoStart(menuItem.checked);
          updateTrayMenu();
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('settings-updated', store.getSettings());
          }
        }
      },
      { type: 'separator' },
      {
        label: '❌ Fechar DeerPrint',
        click: () => {
          isQuitting = true;
          app.quit();
        }
      }
    ]);

    tray.setToolTip(`DeerPrint - Em segundo plano (${currentHotkey})`);
    tray.setContextMenu(contextMenu);
  }

  function createTray() {
    if (tray && !tray.isDestroyed()) return;

    const trayIcon = getTrayIcon();
    tray = new Tray(trayIcon);

    updateTrayMenu();

    tray.on('click', () => {
      if (mainWindow && mainWindow.isVisible() && !mainWindow.isMinimized()) {
        mainWindow.hide();
      } else {
        showMainWindow();
      }
    });

    tray.on('double-click', () => {
      showMainWindow();
    });
  }

  function createSnipWindow(displayBounds) {
    if (snipWindow && !snipWindow.isDestroyed()) {
      snipWindow.destroy();
    }

    snipWindow = new BrowserWindow({
      x: displayBounds.x,
      y: displayBounds.y,
      width: displayBounds.width,
      height: displayBounds.height,
      transparent: true,
      frame: false,
      alwaysOnTop: true,
      skipTaskbar: true,
      resizable: false,
      movable: false,
      hasShadow: false,
      fullscreenable: true,
      fullscreen: true,
      enableLargerThanScreen: true,
      backgroundColor: '#00000000',
      webPreferences: {
        preload: path.join(__dirname, '../preload/snip-preload.js'),
        contextIsolation: true,
        nodeIntegration: false,
        enableRemoteModule: false
      }
    });

    snipWindow.setBounds(displayBounds);
    snipWindow.setAlwaysOnTop(true, 'screen-saver');
    snipWindow.loadFile(path.join(__dirname, '../overlay/snip.html'));

    snipWindow.on('closed', () => {
      snipWindow = null;
      isCapturing = false;
    });
  }

  let wasEditorOpenBeforeCapture = false;

  async function startCaptureFlow(source = 'hotkey') {
    if (isCapturing) return;
    isCapturing = true;

    try {
      if (source === 'editor') {
        wasEditorOpenBeforeCapture = true;
      } else {
        wasEditorOpenBeforeCapture = mainWindow && !mainWindow.isDestroyed() && mainWindow.isVisible() && !mainWindow.isMinimized();
      }

      // 1. Oculta o editor temporariamente para que ele não seja fotografado no fundo
      if (wasEditorOpenBeforeCapture && mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.hide();
        // Pequeno intervalo para o Windows repintar a tela limpa
        await new Promise(r => setTimeout(r, 120));
      }

      // 2. Captura a tela atual
      const captureResult = await captureActiveDisplay();
      if (!captureResult.success) {
        console.error('Falha na captura:', captureResult.error);
        isCapturing = false;
        if (wasEditorOpenBeforeCapture) showMainWindow();
        return;
      }

      createSnipWindow(captureResult.display.bounds);

      snipWindow.webContents.once('did-finish-load', () => {
        snipWindow.webContents.send('init-snip', {
          dataUrl: captureResult.dataUrl,
          display: captureResult.display,
          imageSize: captureResult.imageSize
        });
        snipWindow.show();
        snipWindow.focus();
      });
    } catch (err) {
      console.error('Erro ao iniciar fluxo de captura:', err);
      isCapturing = false;
      if (wasEditorOpenBeforeCapture) showMainWindow();
    }
  }

  function registerGlobalShortcut(shortcutKey) {
    globalShortcut.unregisterAll();
    
    if (!shortcutKey) return { success: false, message: 'Nenhum atalho fornecido' };

    try {
      const success = globalShortcut.register(shortcutKey, () => {
        startCaptureFlow();
      });

      if (!success) {
        console.warn(`Não foi possível registrar o atalho: ${shortcutKey}`);
        return { success: false, message: `O sistema não permitiu registrar "${shortcutKey}". Tente outra combinação.` };
      }

      updateTrayMenu();
      return { success: true, hotkey: shortcutKey };
    } catch (err) {
      console.error(`Erro ao registrar atalho ${shortcutKey}:`, err);
      return { success: false, message: err.message };
    }
  }

  function isLaunchedHidden() {
    const loginSettings = app.getLoginItemSettings();
    if (loginSettings.wasOpenedAtLogin || loginSettings.wasOpenedAsHidden) {
      return true;
    }
    return process.argv.some(arg => {
      const lower = String(arg).toLowerCase().trim();
      return [
        '--hidden', '-hidden', '/hidden',
        '--minimized', '-minimized', '/minimized',
        '--autostart', '-autostart', '/autostart',
        '--silent', '-silent', '/silent',
        '--background', '-background', '/background'
      ].includes(lower);
    });
  }

  // App lifecycle
  app.whenReady().then(() => {
    store = new Store();

    // Limpa atalhos e resíduos da versão antiga do ScreenshotMark e chaves dev
    cleanupLegacyAndDevStartupEntries();

    // Aplica configuração de inicialização com o Windows (apenas para app empacotado)
    const autoStartEnabled = store.getSettings().autoStart !== false;
    applyAutoStart(autoStartEnabled);

    // Cria o ícone oficial na bandeja de notificações (System Tray)
    createTray();

    // Conecta o verificador de atualizações em background
    initUpdater(mainWindow, store);

    // Registra atalho configurado (padrão: F10)
    const currentHotkey = store.getSettings().hotkey || 'F10';
    const regResult = registerGlobalShortcut(currentHotkey);
    if (!regResult.success) {
      registerGlobalShortcut('F10');
    }

    // Se NÃO for inicialização oculta (boot do Windows / background flag), abre a janela do editor imediatamente.
    // Se for inicialização oculta (--hidden), NÃO cria a janela no boot: fica 100% silencioso na bandeja!
    if (!isLaunchedHidden()) {
      createMainWindow(true);
    }

    app.on('activate', () => {
      showMainWindow();
    });
  });

  app.on('before-quit', () => {
    isQuitting = true;
  });

  app.on('will-quit', () => {
    globalShortcut.unregisterAll();
  });

  // Não encerra o processo quando a janela fecha (mantém na bandeja / segundo plano)
  app.on('window-all-closed', () => {
    // Mantém o app vivo em segundo plano
  });

  // IPC Handlers
  ipcMain.handle('trigger-capture', async () => {
    await startCaptureFlow('editor');
    return { success: true };
  });

  ipcMain.handle('save-active-screenshot', async (event, { filePath, dataUrl }) => {
    try {
      if (!filePath || !dataUrl) return { success: false, error: 'Caminho ou imagem inválida' };
      const img = nativeImage.createFromDataURL(dataUrl);
      const ext = path.extname(filePath).toLowerCase();
      let buffer;
      if (ext === '.jpg' || ext === '.jpeg') {
        buffer = img.toJPEG(95);
      } else {
        buffer = img.toPNG();
      }

      await fs.promises.writeFile(filePath, buffer);
      const stats = await fs.promises.stat(filePath);
      const nowIso = new Date().toISOString();

      store.updateHistoryEntry(filePath, {
        fileSize: stats.size,
        timestamp: nowIso
      });

      return { success: true, fileSize: stats.size, timestamp: nowIso };
    } catch (err) {
      console.error('Erro no auto-save da imagem:', err);
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle('get-settings', () => {
    return store.getSettings();
  });

  ipcMain.handle('save-settings', (event, newSettings) => {
    const oldHotkey = store.getSettings().hotkey;
    const saved = store.saveSettings(newSettings);

    if (newSettings.autoStart !== undefined) {
      applyAutoStart(newSettings.autoStart);
    }

    if (saved && newSettings.hotkey && newSettings.hotkey !== oldHotkey) {
      const regResult = registerGlobalShortcut(newSettings.hotkey);
      if (!regResult.success) {
        store.saveSettings({ hotkey: oldHotkey });
        return { success: false, message: regResult.message, currentSettings: store.getSettings() };
      }
    }

    updateTrayMenu();
    return { success: saved, currentSettings: store.getSettings() };
  });

  ipcMain.handle('select-save-directory', async () => {
    const parentWin = (mainWindow && !mainWindow.isDestroyed()) ? mainWindow : undefined;
    const result = await dialog.showOpenDialog(parentWin, {
      title: 'Selecione a pasta para salvar as capturas',
      defaultPath: store.getSettings().saveDirectory,
      properties: ['openDirectory', 'createDirectory']
    });

    if (!result.canceled && result.filePaths.length > 0) {
      const chosenPath = result.filePaths[0];
      store.saveSettings({ saveDirectory: chosenPath });
      return { success: true, path: chosenPath };
    }
    return { success: false };
  });

  ipcMain.handle('get-history', () => {
    return store.getHistory();
  });

  ipcMain.handle('delete-history-item', async (event, { id, filePath }) => {
    store.deleteHistoryEntry(id);
    try {
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
      }
      return { success: true };
    } catch (err) {
      console.error('Erro ao deletar arquivo:', err);
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle('open-file-location', (event, filePath) => {
    if (fs.existsSync(filePath)) {
      shell.showItemInFolder(filePath);
      return { success: true };
    }
    return { success: false, error: 'Arquivo não encontrado' };
  });

  ipcMain.handle('open-save-directory', () => {
    const dir = store.getSettings().saveDirectory;
    store.ensureDirectory(dir);
    shell.openPath(dir);
    return { success: true, path: dir };
  });

  ipcMain.handle('save-image-as', async (event, { dataUrl, defaultName }) => {
    const parentWin = (mainWindow && !mainWindow.isDestroyed()) ? mainWindow : undefined;
    const settings = store.getSettings();
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const timestampStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
    const name = defaultName || `screenshot_${timestampStr}.png`;
    const defaultPath = path.join(settings.saveDirectory || app.getPath('pictures'), name);

    const result = await dialog.showSaveDialog(parentWin, {
      title: 'Salvar Imagem Como',
      defaultPath: defaultPath,
      filters: [
        { name: 'Imagem PNG (*.png)', extensions: ['png'] },
        { name: 'Imagem JPEG (*.jpg)', extensions: ['jpg', 'jpeg'] }
      ]
    });

    if (!result.canceled && result.filePath) {
      try {
        const img = nativeImage.createFromDataURL(dataUrl);
        const ext = path.extname(result.filePath).toLowerCase();
        let buffer;
        if (ext === '.jpg' || ext === '.jpeg') {
          buffer = img.toJPEG(95);
        } else {
          buffer = img.toPNG();
        }

        await fs.promises.writeFile(result.filePath, buffer);
        const stats = await fs.promises.stat(result.filePath);

        const entry = {
          id: 'snip_' + Date.now(),
          fileName: path.basename(result.filePath),
          filePath: result.filePath,
          width: img.getSize().width,
          height: img.getSize().height,
          timestamp: now.toISOString(),
          fileSize: stats.size
        };
        store.addHistoryEntry(entry);

        return { success: true, filePath: result.filePath, fileName: entry.fileName, entry };
      } catch (err) {
        console.error('Erro ao salvar imagem como:', err);
        return { success: false, error: err.message };
      }
    }
    return { success: false, canceled: true };
  });

  ipcMain.handle('copy-image-to-clipboard', (event, dataUrl) => {
    try {
      const image = nativeImage.createFromDataURL(dataUrl);
      clipboard.writeImage(image);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle('finish-snip', async (event, cropData) => {
    try {
      const { dataUrl, width, height } = cropData;
      const settings = store.getSettings();

      // 1. Copia para clipboard imediatamente
      const img = nativeImage.createFromDataURL(dataUrl);
      if (settings.autoCopy !== false) {
        clipboard.writeImage(img);
      }

      // 2. Salva em disco
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const timestampStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
      const fileName = `screenshot_${timestampStr}.png`;
      const filePath = path.join(settings.saveDirectory, fileName);

      const buffer = img.toPNG();
      store.ensureDirectory(settings.saveDirectory);
      await fs.promises.writeFile(filePath, buffer);

      const stats = await fs.promises.stat(filePath);
      const entry = {
        id: 'snip_' + Date.now(),
        fileName,
        filePath,
        width: Math.round(width),
        height: Math.round(height),
        timestamp: now.toISOString(),
        fileSize: stats.size
      };

      store.addHistoryEntry(entry);

      // 3. Fecha janela de recorte
      if (snipWindow && !snipWindow.isDestroyed()) {
        snipWindow.destroy();
        snipWindow = null;
      }
      isCapturing = false;

      // 4. Se o editor estava aberto antes da captura, restaura/mostra o editor com a nova captura.
      // Se a captura foi tirada em segundo plano pelo atalho F10, mantém silencioso na bandeja sem abrir janela.
      if (!mainWindow || mainWindow.isDestroyed()) {
        if (wasEditorOpenBeforeCapture) {
          createMainWindow(true);
          mainWindow.webContents.once('did-finish-load', () => {
            mainWindow.webContents.send('new-screenshot', {
              ...entry,
              dataUrl
            });
          });
        }
      } else {
        mainWindow.webContents.send('new-screenshot', {
          ...entry,
          dataUrl
        });

        if (wasEditorOpenBeforeCapture) {
          if (mainWindow.isMinimized()) mainWindow.restore();
          mainWindow.show();
          mainWindow.focus();
        }
      }

      return { success: true, entry };
    } catch (err) {
      console.error('Erro ao finalizar captura:', err);
      isCapturing = false;
      if (snipWindow && !snipWindow.isDestroyed()) {
        snipWindow.destroy();
        snipWindow = null;
      }
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle('cancel-snip', () => {
    if (snipWindow && !snipWindow.isDestroyed()) {
      snipWindow.destroy();
      snipWindow = null;
    }
    isCapturing = false;
    if (wasEditorOpenBeforeCapture) {
      showMainWindow();
    }
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('capture-status', { status: 'cancelled' });
    }
    return { success: true };
  });

  ipcMain.handle('uninstall-app', async () => {
    try {
      const { spawn } = require('child_process');
      const exeDir = path.dirname(process.execPath);
      
      const possibleUninstallerPaths = [
        path.join(exeDir, 'Uninstall DeerPrint.exe'),
        path.join(exeDir, 'Uninstall ScreenshotMark.exe'),
        path.join(exeDir, 'Uninstall.exe'),
        path.join(process.env.LOCALAPPDATA || '', 'Programs', 'deerprint', 'Uninstall DeerPrint.exe'),
        path.join(process.env.LOCALAPPDATA || '', 'Programs', 'screenshotmark', 'Uninstall ScreenshotMark.exe')
      ];

      let uninstallerToRun = null;
      for (const p of possibleUninstallerPaths) {
        if (fs.existsSync(p)) {
          uninstallerToRun = p;
          break;
        }
      }

      if (uninstallerToRun) {
        isQuitting = true;
        spawn(uninstallerToRun, [], {
          detached: true,
          stdio: 'ignore'
        }).unref();
        setTimeout(() => {
          app.quit();
        }, 300);
        return { success: true };
      } else {
        spawn('control', ['appwiz.cpl'], { detached: true, stdio: 'ignore' }).unref();
        return { success: true, openedControlPanel: true };
      }
    } catch (err) {
      console.error('Erro ao iniciar desinstalador:', err);
      return { success: false, error: err.message };
    }
  });
}
