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
      div[id="removed"] > button {display: none; }
      button[id^="removed-"] {display: none; }
      a[id$="-removed"] {display: none; }

      div[id="archive"] > button { display: none; }
      button[id^="archive-"] { display: none; }
      a[id$="-archive"] { display: none; }

      div[id="danger"] > button:first-child::after { content: " ⚠️ "; }
      button[id^="danger-"]::after { content: " ⚠️ "; }
      button[id="buttons-button-menu"]::after { content: " ⚠️ "; }
      a[id$="-danger"]::after { content: " ⚠️ "; }

      div[id="draft"] > button:first-child::after { content: " 📝 "; }
      button[id^="draft-"]::after { content: " 📝 "; }
      a[id$="-draft"]::after { content: " 📝 "; }
      
      div[id="wip"] > button:first-child::after { content: " 🚧 "; }
      button[id^="wip-"]::after { content: " 🚧 "; }
      a[id$="-wip"]::after { content: " 🚧 "; }
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
