import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts', // setup.ts 파일 경로
    include: ['tests/**/*.test.jsx', 'tests/**/*.test.tsx'],
  },
});
