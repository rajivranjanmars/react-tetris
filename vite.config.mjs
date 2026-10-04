import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-tetris/',
  build: { outDir: 'build' },
  test: { environment: 'jsdom' },
});
