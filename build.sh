mkdir dist
rm -rf dist/* &&\

vite build -c vite.config.js &&\
vite build -c vite.config.background.js &&\
vite build -c vite.config.content_scripts.js &&\

cp -rf chrome/* dist

