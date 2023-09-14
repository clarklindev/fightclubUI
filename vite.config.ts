import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    target: 'modules', //modules is the default - it support native esmodules / dynamic loading
    lib: {
      entry: path.resolve(__dirname, './src/main.tsx'),
      fileName: 'index', // defaults to package name
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        exports: 'named',
        sourcemap: true,
      },
    },
  },
});
