const { spawn } = require("child_process");
const plist = require("plist");

module.exports = getApps = (resolve, reject, filterByAppName = false) => {
  let resultBuffer = new Buffer.from([]);

  const profileInstalledApps = spawn("/usr/sbin/system_profiler", [
    "-xml",
    "-detailLevel",
    "mini",
    "SPApplicationsDataType"
  ]);

  profileInstalledApps.stdout.on("data", chunckBuffer => {
    resultBuffer = Buffer.concat([resultBuffer, chunckBuffer]);
  });

  profileInstalledApps.on("exit", exitCode => {
    if (exitCode !== 0) {
      reject([]);
      return;
    }

    try {
      const [installedApps] = plist.parse(resultBuffer.toString());
      if (!filterByAppName) return resolve(installedApps._items);
      return resolve(
        installedApps._items.filter(apps => apps._name === filterByAppName)
          .length !== 0
      );
    } catch (err) {
      reject(err);
    }
  });

  profileInstalledApps.on("error", err => {
    reject(err);
  });
};
