const { autoUpdater } = require('electron-updater');
const { app, ipcMain } = require('electron');

let mainWindowRef = null;
let lastUpdateStatus = {
  status: 'idle',
  version: app.getVersion(),
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

function initUpdater(mainWindow, store) {
  mainWindowRef = mainWindow;

  // Configurações do autoUpdater
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.allowPrerelease = false;

  // Eventos do electron-updater
  autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow({
      status: 'checking',
      message: 'Buscando atualizações no GitHub Releases...'
    });
  });

  autoUpdater.on('update-available', (info) => {
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

  autoUpdater.on('update-not-available', (info) => {
    sendStatusToWindow({
      status: 'not-available',
      info: {
        version: info ? info.version : app.getVersion()
      },
      message: `Você já está na versão mais recente (v${app.getVersion()}).`
    });
  });

  autoUpdater.on('download-progress', (progressObj) => {
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

  autoUpdater.on('update-downloaded', (info) => {
    sendStatusToWindow({
      status: 'downloaded',
      info: {
        version: info.version,
        releaseDate: info.releaseDate
      },
      message: `Versão v${info.version} baixada e pronta para instalar!`
    });
  });

  autoUpdater.on('error', (err) => {
    const errorMsg = err == null ? 'Erro desconhecido ao verificar atualização' : (err.message || err.toString());
    sendStatusToWindow({
      status: 'error',
      error: errorMsg,
      message: app.isPackaged ? `Falha na verificação: ${errorMsg}` : 'Modo de desenvolvimento (as atualizações automáticas são ativadas no app instalado).'
    });
  });

  // IPC Handlers
  ipcMain.handle('updater:get-version', () => {
    return app.getVersion();
  });

  ipcMain.handle('updater:get-status', () => {
    return { ...lastUpdateStatus, version: app.getVersion() };
  });

  ipcMain.handle('updater:check', async () => {
    if (!app.isPackaged) {
      sendStatusToWindow({
        status: 'not-available',
        info: { version: app.getVersion() },
        message: `Modo de Desenvolvimento (v${app.getVersion()}). Para testar auto-update real, compile o instalador.`
      });
      return { success: true, dev: true };
    }

    try {
      sendStatusToWindow({
        status: 'checking',
        message: 'Buscando atualizações...'
      });
      const result = await autoUpdater.checkForUpdates();
      return { success: true, result };
    } catch (err) {
      sendStatusToWindow({
        status: 'error',
        error: err.message,
        message: `Erro ao buscar atualizações: ${err.message}`
      });
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle('updater:quit-and-install', () => {
    try {
      autoUpdater.quitAndInstall(false, true);
    } catch (err) {
      console.error('Erro ao instalar atualização:', err);
    }
  });

  // Verificação automática inicial se habilitada
  const settings = store ? store.getSettings() : {};
  if (settings.autoCheckUpdates !== false && app.isPackaged) {
    setTimeout(() => {
      autoUpdater.checkForUpdates().catch(() => {});
    }, 4000);
  }
}

module.exports = {
  initUpdater
};
