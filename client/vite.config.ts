import { defineConfig } from 'vite'

export default defineConfig({
  root: './client',
  build: {
    outDir: './dist/public', // Changed output structure
    emptyOutDir: true
  }
})