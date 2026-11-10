const { app, ipcMain } = require('electron');

let autoUpdater = null;
function getAutoUpdater() {
  if (!autoUpdater) {
    try {
      const updaterModule = require('electron-updater');
      autoUpdater = updaterModule.autoUpdater;
    } catch (e) {
      console.warn('Auto-updater could not be loaded:', e);
    }
  }
  return autoUpdater;
}

function getSafeVersion() {
  try {
    return (app && typeof app.getVersion === 'function') ? app.getVersion() : '3.1.0';
  } catch (e) {
    return '3.1.0';
  }
}

let mainWindowRef = null;
let lastUpdateStatus = {
  status: 'idle',
  version: getSafeVersion(),
  info: null,
  progress: null,
  error: null
};

function sendStatusToWindow(statusObj) {
  lastUpdateStatus = { ...lastUpdateStatus, ...statusObj };
  if (mainWindowRef && !mainWindowRef.isDestroyed()) {
    mainWindowRef.webContents.send('updater:status', lastUpdateStatus);
  }
}

let isInitialized = false;

function initUpdater(mainWindow, store) {
  mainWindowRef = mainWindow;

  if (mainWindowRef && !mainWindowRef.isDestroyed()) {
    mainWindowRef.webContents.send('updater:status', lastUpdateStatus);
  }

  if (isInitialized) {
    return;
  }
  isInitialized = true;

  const updater = getAutoUpdater();
  if (!updater) {
    console.warn('AutoUpdater indisponível neste ambiente.');
    return;
  }

  // Configurações do autoUpdater
  updater.autoDownload = true;
  updater.autoInstallOnAppQuit = true;
  updater.allowPrerelease = false;

  // Eventos do electron-updater
  updater.on('checking-for-update', () => {
    sendStatusToWindow({
      status: 'checking',
      message: 'Buscando atualizações no GitHub Releases...'
    });
  });

  updater.on('update-available', (info) => {
    sendStatusToWindow({
      status: 'available',
      info: {
        version: info.version,
        releaseDate: info.releaseDate,
        releaseNotes: info.releaseNotes
      },
      message: `Nova versão v${info.version} encontrada! Baixando...`
    });
  });

  updater.on('update-not-available', (info) => {
    sendStatusToWindow({
      status: 'not-available',
      info: {
        version: info ? info.version : getSafeVersion()
      },
      message: `Você já está na versão mais recente (v${getSafeVersion()}).`
    });
  });

  updater.on('download-progress', (progressObj) => {
    sendStatusToWindow({
      status: 'downloading',
      progress: {
        percent: Math.round(progressObj.percent || 0),
        bytesPerSecond: progressObj.bytesPerSecond || 0,
        transferred: progressObj.transferred || 0,
        total: progressObj.total || 0
      },
      message: `Baixando atualização: ${Math.round(progressObj.percent || 0)}%`
    });
  });

  updater.on('update-downloaded', (info) => {
    sendStatusToWindow({
      status: 'downloaded',
      info: {
        version: info.version,
        releaseDate: info.releaseDate
      },
      message: `Versão v${info.version} baixada e pronta para instalar!`
    });
  });

  function sanitizeUpdateError(err) {
    if (!err) return 'Erro desconhecido ao verificar atualização.';
    const raw = err.message || err.toString();
    if (raw.includes('Cannot find latest.yml') || raw.includes('404')) {
      return 'A nova versão foi registrada e está sendo compilada pelo GitHub Actions na nuvem. Aguarde de 2 a 5 minutos para a conclusão e clique em "Verificar Novamente".';
    }
    if (raw.includes('ERR_INTERNET_DISCONNECTED') || raw.includes('ENOTFOUND') || raw.includes('ETIMEDOUT') || raw.includes('ECONNRESET')) {
      return 'Não foi possível conectar ao GitHub. Verifique sua conexão com a internet e tente novamente.';
    }
    const cleanLine = raw.split('\n')[0].replace(/Headers:\s*\{.*?\}/gi, '').trim();
    return cleanLine.length > 140 ? cleanLine.substring(0, 140) + '...' : cleanLine;
  }

  updater.on('error', (err) => {
    const cleanMsg = sanitizeUpdateError(err);
    sendStatusToWindow({
      status: 'error',
      error: cleanMsg,
      message: app.isPackaged ? cleanMsg : 'Modo de desenvolvimento (as atualizações automáticas são ativadas no app instalado).'
    });
  });

  // IPC Handlers
  ipcMain.handle('updater:get-version', () => {
    return getSafeVersion();
  });

  ipcMain.handle('updater:get-status', () => {
    return { ...lastUpdateStatus, version: getSafeVersion() };
  });

  ipcMain.handle('updater:check', async () => {
    if (!app.isPackaged) {
      sendStatusToWindow({
        status: 'not-available',
        info: { version: getSafeVersion() },
        message: `Modo de Desenvolvimento (v${getSafeVersion()}). Para testar auto-update real, compile o instalador.`
      });
      return { success: true, dev: true };
    }

    try {
      sendStatusToWindow({
        status: 'checking',
        message: 'Buscando atualizações...'
      });
      const activeUpdater = getAutoUpdater();
      const result = activeUpdater ? await activeUpdater.checkForUpdates() : null;
      return { success: true, result };
    } catch (err) {
      const cleanMsg = sanitizeUpdateError(err);
      sendStatusToWindow({
        status: 'error',
        error: cleanMsg,
        message: cleanMsg
      });
      return { success: false, error: cleanMsg };
    }
  });

  ipcMain.handle('updater:quit-and-install', () => {
    try {
      const activeUpdater = getAutoUpdater();
      if (activeUpdater) {
        activeUpdater.quitAndInstall(true, true);
      }
    } catch (err) {
      console.error('Erro ao instalar atualização:', err);
    }
  });

  // Verificação automática inicial se habilitada (delay de 12s para não concorrer no boot)
  const settings = store ? store.getSettings() : {};
  if (settings.autoCheckUpdates !== false && app.isPackaged) {
    setTimeout(() => {
      const activeUpdater = getAutoUpdater();
      if (activeUpdater) {
        activeUpdater.checkForUpdates().catch(() => { });
      }
    }, 12000);
  }
}

module.exports = {
  initUpdater
};
