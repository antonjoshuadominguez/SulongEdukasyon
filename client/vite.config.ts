import { defineConfig } from 'vite'

export default defineConfig({
  root: './client',  // Set client directory as root
  build: {
    outDir: './client/dist',  // Explicit output path
    emptyOutDir: true
  }
})