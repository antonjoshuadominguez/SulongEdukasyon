import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './client',
  build: {
    outDir: path.resolve(__dirname, 'dist/client'), // Absolute path
    emptyOutDir: true,
    manifest: true
  }
})