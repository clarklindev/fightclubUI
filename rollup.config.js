import mdx from '@mdx-js/rollup';
import { defineConfig } from 'rollup';
import react from '@vitejs/plugin-react'; // if you're using Vite
import esbuild from 'rollup-plugin-esbuild';

export default defineConfig({
  input: 'src/index.tsx',
  plugins: [
    mdx({ providerImportSource: '@mdx-js/react' }), // This will enable rendering of MDX files
    esbuild(),
    react(), // optional if using Vite
  ],
});