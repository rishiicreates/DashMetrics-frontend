import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path'; // Use 'node:path' to prevent conflicts

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'), // Use `process.cwd()` for better compatibility
    },
  },
  build: {
    outDir: 'dist',
    target: 'esnext', // Ensure modern build
    sourcemap: true, // Helpful for debugging
  },
  server: {
    port: 3000, // Change port if needed
    open: true, // Auto-open browser
    strictPort: true, // Avoid auto-changing ports
    hmr: {
      overlay: true, // Show errors in overlay
    },
  },
});