import { defineConfig } from 'vite';

// base: './' باعث می‌شود بازی روی هر مسیری
// (از جمله GitHub Pages subpath) کار کند.
export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  server: {
    host: true,
    port: 5173
  }
});
