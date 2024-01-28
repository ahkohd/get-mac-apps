const getApps = require("./getApps");

module.exports = {
  getApps: () => {
    return new Promise((resolve, reject) => getApps(resolve, reject));
  },
  isInstalled: (appName) => {
    return new Promise((resolve, reject) => getApps(resolve, reject, appName));
  },
};
