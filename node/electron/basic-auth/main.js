const { app, BrowserWindow, ipcMain } = require("electron");

let win;
let loginCallback;
let subWindow;
function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

app.on("login", (event, webContents, request, authInfo, callback) => {
  console.log("Login");
  if (authInfo.isProxy) {
    // do nothing
    return;
  }
  event.preventDefault();
  subWindow = new BrowserWindow({
    parent: win,
    modal: true
  });
  subWindow.loadFile("auth.html");
  loginCallback = callback;
});

ipcMain.on("authorization", (event, arg) => {
  console.log(arg);
  subWindow.close();
  loginCallback(arg.username, arg.password);
});
