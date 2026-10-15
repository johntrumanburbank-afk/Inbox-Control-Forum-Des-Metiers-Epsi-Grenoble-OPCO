/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: { port: 5173, host: '0.0.0.0', allowedHosts: true },
  preview: { port: 4173, host: '0.0.0.0', allowedHosts: true },
  test: { environment: 'node', include: ['src/tests/**/*.test.ts'] },
});
