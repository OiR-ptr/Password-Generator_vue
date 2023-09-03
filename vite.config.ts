import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills({
      globals: {
        Buffer: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src/')
    }
  }
});