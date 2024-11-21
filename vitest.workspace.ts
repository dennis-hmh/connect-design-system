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
    ],
    test: {
      name: 'storybook',
      include: ['src/**/**/*.stories.?(ts|tsx)'],
      browser: {
        enabled: true,
        name: 'chromium',
      },
      isolate: false,
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  },
]);
