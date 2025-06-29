import { Preview } from '@storybook/react';

import '../src/assets/css/source.css';
import '../src/assets/scss/custom.scss';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        //(a, b) =>
        // a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
        order: [
          'Animation',
          'Buttons',
          'Content',
          'Figure',
          'Input',
          'Layout',
          'Misc',
          'Draft',
          'WIP',
          'Design System',
          'Pattern',
          'Archive',
          'Removed',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
