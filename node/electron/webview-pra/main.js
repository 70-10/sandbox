const { app, BrowserWindow, ipcMain } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("index.html");
}

app.on("ready", createWindow);

ipcMain.on("link", (event, args) => {
  event.sender.send("reply", "https://www.google.co.jp");
});
