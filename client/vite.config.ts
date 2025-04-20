// @ts-ignore - The defineConfig type definition is imported during build
import { defineConfig } from "vite";
// @ts-ignore - Plugin imports are handled during build
import react from "@vitejs/plugin-react";
// @ts-ignore
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
// @ts-ignore
import path from "path";
// @ts-ignore
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// @ts-ignore
import { fileURLToPath } from "url";

// Handle __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});