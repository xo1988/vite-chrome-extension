mkdir dist
rm -rf dist/* &&\

vite build -c vite.config.popup.js &&\
vite build -c vite.config.override.js &&\
vite build -c vite.config.background.js &&\

cp -r src/assets dist &&\
cp src/manifest.json dist/manifest.json &&\

# copy public 

mv src/override/dist/override/* dist/override/ &&\
rm -rf src/override/dist &&\
mv src/popup/dist/popup/* dist/popup/ &&\
rm -rf src/popup/dist
