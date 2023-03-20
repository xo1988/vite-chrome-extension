import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'background.js',
      name: 'background',
      fileName: 'background'
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/background/background.ts'),
      },
      output: {
        dir: "dist/background"
      }
    }
  }
})