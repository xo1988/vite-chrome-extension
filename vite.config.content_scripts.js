import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  root: 'src/content_scripts',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  build: {
    lib: {
      entry: 'content_scripts.js',
      name: 'content_scripts',
      fileName: 'content_scripts'
    },
    rollupOptions: {
      input: 'src/content_scripts/content_scripts.ts',
      output: {
        dir: "dist/content_scripts"
      }
    }
  }
})
