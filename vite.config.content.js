import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  root: 'src/content',
  build: {
    rollupOptions: {
      output: {
        dir: "dist/content"
      }
    }
  }
})
