const { app, BrowserWindow } = require("electron");
const path = require("path");
const { dialog } = require("electron");
const isDev = require("electron-is-dev");
const { session } = require("electron");

app.userAgentFallback =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) old-airport-include/1.0.0 Chrome Electron/7.1.7 Safari/537.36";

// app.userAgentFallback =
//   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36";

// function deleteAllCookies() {
//   console.log("bahar");
//   session.defaultSession.cookies.get({}, (error, cookies) => {
//     cookies.forEach((cookie) => {
//       let url = "";
//       // get prefix, like https://www.
//       url += cookie.secure ? "https://" : "http://";
//       url += cookie.domain.charAt(0) === "." ? "www" : "";
//       // append domain and path
//       url += cookie.domain;
//       url += cookie.path;
//       console.log("andar" + url);

//       session.defaultSession.cookies.remove(url, cookie.name, (error) => {
//         if (error) console.log(`error removing cookie ${cookie.name}`, error);
//         else console.log("deletd successfully");
//       });
//     });
//   });
// }
const GloginWin = null;
function createWindow() {
  // Create the browser window.

  const win = new BrowserWindow({
    width: 1200,
    height: 700,

    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  // and load the index.html of the app.
  // win.removeMenu();
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // deleteAllCookies();

  // session.defaultSession.cookies
  //   .get({})
  //   .then((cookies) => {
  //     console.log(cookies);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //   session.defaultSession.cookies.remove(
  //   "http://advcrawler.buyhatke.com",
  //   "connect.sid"
  // );

  // session.defaultSession.cookies
  //   .get({ name: "connect.sid" })
  //   .then((cookies) => {
  //     console.log(cookies);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // const ses = win.webContents.session;
  // ses.setUserAgent("Chrome");

  // const options = {
  //   buttons: ["Yes", "No", "Cancel"],
  //   message: "hello world" + ses.getUserAgent(),
  // };
  // dialog.showMessageBox(options);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
