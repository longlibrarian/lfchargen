const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        heigth: 1000, 
        width: 900, 
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    win.loadURL('file://' + path.resolve(__dirname, '../../index.html'));
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
});