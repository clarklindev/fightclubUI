import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import mdx from '@mdx-js/rollup';
import { createHighlighter, bundledLanguages, bundledThemes } from 'shiki';
import rehypeShiki from 'rehype-shiki';

export default defineConfig(async () => {
  const highlighter = await createHighlighter({
    themes: [bundledThemes['github-dark']],
    langs: [
      bundledLanguages.js,
      bundledLanguages.ts,
      bundledLanguages.html,
      bundledLanguages.bash
    ],
  });

  return {
    plugins: [
      react(),
      mdx({
        rehypePlugins: [[rehypeShiki, { highlighter }]],
      }),
    ],
    publicDir: 'static-assets',
    resolve: {
      alias: {
        '@fightclub': path.resolve(__dirname, './src'),
      },
    },
  };
});
