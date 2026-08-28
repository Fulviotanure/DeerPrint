const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('snipAPI', {
  // Receive screen capture snapshot from main process
  onInitCapture: (callback) => {
    const handler = (event, payload) => callback(payload);
    ipcRenderer.on('init-snip', handler);
    return () => ipcRenderer.removeListener('init-snip', handler);
  },

  // Complete crop and send to main
  finishCrop: (cropData) => ipcRenderer.invoke('finish-snip', cropData),

  // Cancel snip (Esc key or click outside)
  cancelCrop: () => ipcRenderer.invoke('cancel-snip')
});
