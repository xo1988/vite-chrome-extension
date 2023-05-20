# Vite + Vue 3 + Chrome Extension

Vite Vue 3 for Chrome Extension

## Usage

Folder dictionary like below:

```bash
- chrome # for manifest, _locales, assets log
  - assets # logo
  - _locales # locales
  - manifest.json # manifest for v3
- src
  - assets # icon for manifest
  - background # background service worker
  - override # override page
  - popup # popup page
  - option # option page
  - vite.config.background.js # for background project
  - vite.config.content_scripts.js # for content_scripts project
  - vite.config.js # for option, override, popup // multi entry
  - build.sh # build shell
- popup.html # popup.html
- option.html # option
- override.html # override
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
vite build -c vite.config.js &&\
vite build -c vite.config.background.js &&\
vite build -c vite.config.content_scripts.js
```

<img src="https://github.com/xo1988/vite-chrome-extension/blob/develop/bmc_qr.png" width="180">

