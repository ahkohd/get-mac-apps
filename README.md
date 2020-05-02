# get-mac-apps

A Node.JS package that lists apps installed or check if app is installed on a Mac. 🍏👨‍💻

## 👨‍💻 Install

```bash
$ npm install get-mac-apps
```

## 🔌 Usage

```js
let getWinApps = require("get-mac-apps");

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
```

### ✅ OUTPUT

```ts
 getApps() -> Array<{ _name: String,
  arch_kind: String<'arch_i64' | any>,
  lastModified: Date,
  obtained_from: String<'unknown' | 'identified_developer', 'apple'>,
  path: String,
  version: String }> | Error

isInstalled(appName: String) -> boolean | Error

```

## 🤔 How it works

Easy as pie! We use Node.JS to spawn a `system profiler` process to profile apps installed on the Mac. We parse the resulting `plist`.

---

Try the `installed apps profiler` command on your terminal:

```bash
/usr/sbin/system_profiler -xml -detailLevel mini SPApplicationsDataType
```

## 🛠 Development

```bash
git clone https://github.com/ahkohd/get-mac-apps.git
cd get-mac-apps

// run an example
npm test

```

## 🧾 License

[MIT](./LICENSE.md)
