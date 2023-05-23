mkdir dist
rm -rf dist/* &&\

vite build -c vite.config.js &&\
vite build -c vite.config.script.js &&\

cp -rf chrome/* dist

