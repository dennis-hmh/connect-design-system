import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',

  stories: ['../src/components/**/*.stories.@(ts|tsx)'],

  features: {},

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  docs: {},

  managerHead: (head) => `
    ${head}
    <style>
      div[id="removed"] { display: none; }
      button[id="removed-drag-drop"] { display: none; }
      button[id="removed-flipcards"] { display: none; }
      button[id="removed-reveal"] {display: none; }
      .sidebar-item:has(button[id="buttons-button-rive"]) { display: none; }
      .sidebar-item:has(button[id="buttons-button-split"]) { display: none; }
      .sidebar-item:has(button[id="layout-card"]) { display: none; }
    </style>
  `,

  async viteFinal(config) {
    return {
      ...config,
      plugins: await withoutVitePlugins(config.plugins, ['vite:lib-inject-css']),
    };
  },
};

export default config;
