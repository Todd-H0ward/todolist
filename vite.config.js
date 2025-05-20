import { fileURLToPath } from 'node:url';
import path, { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components'),
      providers: resolve(__dirname, './src/providers'),
      store: resolve(__dirname, './src/store'),
      styles: resolve(__dirname, './src/styles'),
      hooks: resolve(__dirname, './src/hooks'),
    },
  },
});
