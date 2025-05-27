const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  store: {
    get(key) {
      return ipcRenderer.invoke("store-get", key);
    },
    set(key, value) {
      ipcRenderer.invoke("store-set", key, value);
    },
  },
  safeStorage: {
    encryptString(value) {
      return ipcRenderer.invoke("safe-storage-encrypt", value);
    },
    decryptString(value) {
      return ipcRenderer.invoke("safe-storage-decrypt", value);
    },
  },
});
