import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@swagfinger': path.resolve(__dirname, './src'),
      '@swagfinger/components': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    target: 'modules',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'swagfingerui',
      fileName: 'index',
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.tsx'), // Specify your main entry point file
      },
      external: ['react', 'react-dom', '@swagfinger/components'],
      output: {
        globals: {
          react: 'React', // Adjust this to match your global variable name
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
