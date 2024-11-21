import { defineConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      react(),
      storybookTest({
        storybookScript: 'pnpm storybook --ci',
      }),
    ],
    // test: {
    //   include: ['src/components/**/*.stories.@(ts|tsx)'],
    //   exclude: [
    //     'src/components/DragDrop/DragDrop.stories.@(jsx|tsx)',
    //     'src/components/FlipCards/FrontCard.stories.@(jsx|tsx)',
    //     'src/components/Reveal/Reveal.stories.@(jsx|tsx)',
    //   ],
    //   browser: {
    //     enabled: true,
    //     name: 'chromium',
    //   },
    //   globals: true,
    //   environment: 'jsdom',
    //   coverage: {
    //     enabled: false,
    //   },
    //   isolate: false,
    //   setupFiles: ['./.storybook/vitest.setup.ts'],
    // },
  }),
);
