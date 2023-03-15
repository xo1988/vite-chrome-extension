rm -rf dist/* &&\

vite build -c vite.config.popup.js &&\
vite build -c vite.config.content.js &&\
vite build -c vite.config.background.js &&\

cp -r src/assets dist &&\
cp src/manifest.json dist/manifest.json &&\
mv src/content/dist/content/* dist/content/ &&\
rm -rf src/content/dist &&\
mv src/popup/dist/popup/* dist/popup/ &&\
rm -rf src/popup/dist
