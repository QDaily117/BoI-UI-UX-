const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  attachToApp: (processName) => ipcRenderer.invoke('attach-to-app', processName)
});
