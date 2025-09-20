import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  base: '/fitness-class-reservation-app/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
