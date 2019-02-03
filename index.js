const electron = require("electron");

const { app, BrowserWindow } = electron;

let mainWindow;

app.on("ready", () => {
  console.log("App is ready");

  mainWindow = new BrowserWindow({ title: "Please wait ..." });

  mainWindow.loadFile(`${__dirname}/index.html`);
});
