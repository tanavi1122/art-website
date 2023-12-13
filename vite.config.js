import { defineConfig } from 'vite';
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue';
//const path = require('path')

import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  plugins: [vue()],
});