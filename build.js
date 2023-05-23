import fs from 'fs';
import path from 'path';

const copyFolder = (srcDir, destDir) => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  fs.readdirSync(srcDir).forEach((file) => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolder(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};


let fpath = path.resolve(process.cwd(), 'chrome')
let tpath = path.resolve(process.cwd(), 'dist')
copyFolder(fpath, tpath)
