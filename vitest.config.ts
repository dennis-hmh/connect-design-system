import { defineConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [react()],
    test: {
      include: ['src/components/**/*.test.@(ts|tsx)'],
      exclude: ['src/components/**/*.stories.@(jsx|tsx)'],
      globals: true,
      environment: 'jsdom',
      isolate: false,
      setupFiles: ['./vitest.setup.ts'],
    },
  }),
);
