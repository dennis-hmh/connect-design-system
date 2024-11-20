import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

export default defineWorkspace([
  './vitest.config.ts',
  {
    extends: './vite.config.ts',
    plugins: [
      storybookTest({
        storybookScript: 'pnpm storybook --ci',
      }),
      // storybookNextJsPlugin(),
    ],
    test: {
      name: 'storybook',
      include: ['src/**/**/*.stories.?(ts|tsx)'],
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
        headless: true,
      },
      isolate: false,
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  },
]);
