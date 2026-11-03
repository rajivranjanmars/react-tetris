import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/react-tetris/',
  build: { outDir: 'build' },
  test: { environment: 'jsdom' },
});
