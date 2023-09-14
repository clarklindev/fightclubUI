import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import * as url from 'url';
import postCssNesting from 'postcss-nesting';

export default ({ command, mode }) => {
  //todo: install vscode extension: language-postcss
  //settings-> search "file associations" -> item: *.css , value: postcss
  const isProduction = mode === 'production';

  return defineConfig({
    plugins: [react(), splitVendorChunkPlugin()],
    build: isProduction && {
      target: 'modules', //modules is the default - it support native esmodules / dynamic loading
      lib: {
        entry: path.resolve(
          path.dirname(url.fileURLToPath(import.meta.url)),
          './src/main.tsx',
        ),
        name: 'mylib',
        fileName: 'swagfingerui', // defaults to package name
        formats: ['es'],
      },
      rollupOptions: {
        external: [],
        output: {
          exports: 'named',
          sourcemap: true,
        },
      },
    },
  });
};
