import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: '/js',
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/background/background.ts'),
        resolve(__dirname, 'src/content_scripts/content_scripts.ts'),
      ],
      fileName: (_, entryName) => {
        return `${entryName}.js`;
      },
    },
    outDir: 'dist/js'
  }
})
