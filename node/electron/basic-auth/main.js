const { app, BrowserWindow } = require("electron");

let win;
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
  callback("user", "password");
});
