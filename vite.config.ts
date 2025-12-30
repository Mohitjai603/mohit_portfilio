
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This allows process.env.API_KEY to work in the browser during build
    'process.env.API_KEY': JSON.stringify("AIzaSyBqrWB_qLnL95ma6zQleAcdMPixkGDplb8")
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
