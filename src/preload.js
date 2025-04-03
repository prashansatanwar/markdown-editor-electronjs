const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electronAPI", {
    convertMarkdown: (text) => ipcRenderer.invoke("convert-markdown", text)
})