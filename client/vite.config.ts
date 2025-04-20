import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './client',
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Absolute path to root/dist
    emptyOutDir: true,
    manifest: true // Generates asset manifest
  }
})