const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        fullscreen: true,
        autoHideMenuBar: true,
    });

    win.loadFile("dist/index.html");
}

app.whenReady().then(createWindow);