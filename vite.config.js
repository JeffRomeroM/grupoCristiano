import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import workbox from 'workbox-webpack-plugin';

export default defineConfig({
  // ...otras configuraciones...
  plugins: [vue()],

  build: {
    rollupOptions: {
      // ...otras opciones de rollup...
      output: {
        // ...otras opciones de salida...
        manualChunks: undefined,
      },
    },
  },

  plugins: [
    // ...otros complementos...
    workbox({
      swDest: './dist/sw.js',
      globDirectory: './dist',
      globPatterns: ['**/*.{html,js,css}'],
    }),
  ],
});
