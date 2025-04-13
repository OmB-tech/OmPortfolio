import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Optional: Add server configuration for development
  server: {
    port: 3000,
    open: true,
  },
  // Optional: Add build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  // Optional: Add preview configuration
  preview: {
    port: 3000,
  },
}) as UserConfig