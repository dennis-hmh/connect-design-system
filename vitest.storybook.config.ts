import { defineConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        storybookScript: 'pnpm storybook --ci',
      }),
      react(),
    ],
    test: {
      include: ['src/components/**/*.stories.@(ts|tsx)'],
      exclude: ['src/**/*.test.@(ts|tsx)'],
      browser: {
        enabled: true,
        name: 'chromium',
      },
      globals: true,
      environment: 'jsdom',
      coverage: {
        enabled: false,
      },
      isolate: false,
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  }),
);
