import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para rutas más limpias
    },
  },
  css: {
    preprocessorOptions: {
      css: {},
    },
  },
 
});
