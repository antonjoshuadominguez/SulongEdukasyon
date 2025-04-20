import { defineConfig } from 'vite'

export default defineConfig({
  root: './client',
  build: {
    outDir: '../dist', // Changed to root-level dist
    emptyOutDir: true,
    manifest: true
  }
})