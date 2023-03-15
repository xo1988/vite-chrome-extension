import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/background/background.js'),
      },
      output: {
        dir: "dist/background",
        entryFileNames: "background.js"
      }
    }
  }
})