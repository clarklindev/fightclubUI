import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mainConfig from './vite.config'; // Import the main config

export default defineConfig({
  ...mainConfig,
  plugins: [react()],
  publicDir: 'static-assets',
});
