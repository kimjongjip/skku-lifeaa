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
    coverage: {
      provider: 'c8', // c8을 사용해 커버리지 리포트를 생성
      reporter: ['text', 'lcov', 'clover'], // lcov, clover 리포터를 추가
      reportsDirectory: './coverage', // 커버리지 리포트 디렉토리 설정
    },
  },
});
