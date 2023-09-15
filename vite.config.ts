import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default ({ command }) => {
  return defineConfig({
    base: '/',
    plugins: [react()],
    build: {
      target: 'modules', //modules is the default - it support native esmodules / dynamic loading
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        fileName: 'index', // defaults to package name
        formats: ['es'],
      },
      sourcemap: true,
      rollupOptions: {
        output: {
          exports: 'named',
        },
      },
    },
  });
};
