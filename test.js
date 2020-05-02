const getMacApps = require("./index");

// 🦄 Get the list of all installed apps...

getMacApps
  .getApps()
  .then(apps => console.log(apps))
  .catch(error => console.log(error.message));

// 🚀 Check if Terminal app is installed...

getMacApps
  .isInstalled("Terminal")
  .then(isInstalled => console.log(isInstalled))
  .catch(error => console.log(error.message));
