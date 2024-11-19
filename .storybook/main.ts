import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  stories: [
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

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
    </style>
  `,
};

export default config;
