// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Error Handling
process.on('uncaughtException', (error) => {
  console.error("Unexpected error: ", error);
});
function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: true,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
    }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}
// App Lifecycle
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
