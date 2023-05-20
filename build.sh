mkdir dist
rm -rf dist/* &&\

vite build -c vite.config.script.js &&\
vite build -c vite.config.js &&\

cp -rf chrome/* dist

