import { defineConfig } from 'vite'

export default defineConfig({
  root: './client',
  build: {
    outDir: '../client/dist/public',
    emptyOutDir: true
  }
})