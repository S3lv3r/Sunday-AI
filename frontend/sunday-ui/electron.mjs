// electron.mjs
import {
    app,
    BrowserWindow
} from 'electron';
import path from 'path';
import {
    fileURLToPath
} from 'url';

// Necesario para __dirname en módulos ES
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadURL('http://localhost:5173');
}

app.whenReady().then(createWindow);