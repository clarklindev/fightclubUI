import { defineConfig, type UserConfig } from 'vite';
import mdx from "@mdx-js/rollup"

import { createHighlighter, bundledLanguages, bundledThemes } from 'shiki';
import rehypeShiki from 'rehype-shiki';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(async (): Promise<UserConfig> =>{

  const highlighter = await createHighlighter({
    themes: [bundledThemes['github-dark']],
    langs: [
      bundledLanguages.js, 
      bundledLanguages.ts, 
      bundledLanguages.html,
      bundledLanguages.bash
    ],
    theme: 'github-dark', // still needed as default
  });

  return {
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    plugins: [react(), mdx({
      rehypePlugins: [[rehypeShiki, { highlighter }]],
    })],
    resolve: {
      alias: {
        ['@fightclub']: path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'modules',
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: `fightclubui`,
        fileName: 'index',
        formats: ['es'],
      },
      sourcemap: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'src/main.tsx'), // Specify your main entry point file
        },
        treeshake: false,
        external: ['react', 'react-dom', 'tailwind'],
        output: {
          globals: {
            react: 'React', // Adjust this to match your global variable name
            'react-dom': 'ReactDOM',
          },
        },
      },
      minify: false,
    },
  }
});