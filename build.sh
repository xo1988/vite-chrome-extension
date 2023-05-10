mkdir dist
rm -rf dist/* &&\

vite build -c vite.config.popup.js &&\
vite build -c vite.config.override.js &&\
vite build -c vite.config.option.js &&\
vite build -c vite.config.background.js &&\
vite build -c vite.config.content_scripts.js &&\

cp -r src/assets dist &&\
cp src/manifest.json dist/manifest.json &&\

# copy public 
mv src/override/dist/override/* dist/override/ &&\
rm -rf src/override/dist &&\
mv src/option/dist/option/* dist/option/ &&\
rm -rf src/option/dist &&\
mv src/popup/dist/popup/* dist/popup/ &&\
rm -rf src/popup/dist
