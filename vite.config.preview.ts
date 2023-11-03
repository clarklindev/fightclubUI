import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'static-assets',
  resolve: {
    alias: {
      '@swagfinger': path.resolve(__dirname, './src'),
      '@swagfinger/components': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    target: 'modules',
    sourcemap: true,
  },
});
