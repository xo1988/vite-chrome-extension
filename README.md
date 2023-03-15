# Vite + Vue 3 + Chrome Extension

Vite Vue 3 for Chrome Extension

## Usage

Folder dictionary like below:

```bash
- src
  - assets # icon for manifest
  - background # background service worker
  - override # override page
  - popup # popup page
  - manifest.json # manifest for v3
  - vite.config.override.js # for override project
  - vite.config.background.js # for background project
  - vite.config.popup.js # for popup project
  - build.sh # build shell
```

Then build whole project to gen dist folder.
Now support background work, popup and override.
Each project can configure isolate.

```javascript
npm initall

npm run build
```

Build shell compile projects and copy or move files. Some like below.
```javascript
vite build -c vite.config.popup.js &&\
vite build -c vite.config.override.js &&\
vite build -c vite.config.background.js
```

![Thank you very much~](bmc_qr.png)