const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Capture trigger
  triggerCapture: () => ipcRenderer.invoke('trigger-capture'),

  // Settings
  getSettings: () => ipcRenderer.invoke('get-settings'),
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
  selectSaveDirectory: () => ipcRenderer.invoke('select-save-directory'),
  
  // History & Files
  getHistory: () => ipcRenderer.invoke('get-history'),
  deleteHistoryItem: (id, filePath) => ipcRenderer.invoke('delete-history-item', { id, filePath }),
  openFileLocation: (filePath) => ipcRenderer.invoke('open-file-location', filePath),
  openSaveDirectory: () => ipcRenderer.invoke('open-save-directory'),
  
  // Clipboard & Saving
  copyImageToClipboard: (dataUrl) => ipcRenderer.invoke('copy-image-to-clipboard', dataUrl),
  saveImageAs: (dataUrl, defaultName) => ipcRenderer.invoke('save-image-as', { dataUrl, defaultName }),
  saveActiveScreenshot: (filePath, dataUrl) => ipcRenderer.invoke('save-active-screenshot', { filePath, dataUrl }),

  // Events listener from main process
  onNewScreenshot: (callback) => {
    const handler = (event, data) => callback(data);
    ipcRenderer.on('new-screenshot', handler);
    return () => ipcRenderer.removeListener('new-screenshot', handler);
  },

  onCaptureStatus: (callback) => {
    const handler = (event, status) => callback(status);
    ipcRenderer.on('capture-status', handler);
    return () => ipcRenderer.removeListener('capture-status', handler);
  },

  // Auto-Updater API
  getAppVersion: () => ipcRenderer.invoke('updater:get-version'),
  getUpdateStatus: () => ipcRenderer.invoke('updater:get-status'),
  checkForUpdates: () => ipcRenderer.invoke('updater:check'),
  quitAndInstallUpdate: () => ipcRenderer.invoke('updater:quit-and-install'),
  onUpdaterStatus: (callback) => {
    const handler = (event, statusObj) => callback(statusObj);
    ipcRenderer.on('updater:status', handler);
    return () => ipcRenderer.removeListener('updater:status', handler);
  }
});
