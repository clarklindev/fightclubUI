import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default ({ command }) => {
  const isServe = command === 'serve';

  return defineConfig({
    base: '/',
    plugins: [react()],
    build: {
      target: 'modules', //modules is the default - it support native esmodules / dynamic loading
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'swagfingerui',
        fileName: 'index', // defaults to package name
        formats: ['es'],
      },
      sourcemap: true,
      rollupOptions: {
        external: ['react'],
        output: {
          exports: 'named',
          globals: {
            react: 'react',
          },
        },
      },
    },
  });
};
