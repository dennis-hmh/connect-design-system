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
      exclude: [
        'src/components/DragDrop/DragDrop.stories.@(jsx|tsx)',
        'src/components/FlipCards/FrontCard.stories.@(jsx|tsx)',
        'src/components/Reveal/Reveal.stories.@(jsx|tsx)',
      ],
      browser: {
        enabled: true,
        name: 'chromium',
      },
      isolate: false,
      setupFiles: ['./.storybook/vitest.setup.ts'],
    },
  },
]);
