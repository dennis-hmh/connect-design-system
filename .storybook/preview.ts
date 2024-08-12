import React from 'react';
import { Preview } from '@storybook/react';

import '../src/assets/css/source.css';
import '../src/assets/scss/custom.scss';

const preview: Preview = {
  parameters: {
    themes: {
      default: 'Grade 4-5',
      list: [
        {
          name: 'Grade 2-3',
          class: 'connect__g23',
        },
        {
          name: 'Grade 4-5',
          class: 'connect__g45',
        },
        {
          name: 'Grade 6-8',
          class: 'connect__g68',
        },
        {
          name: 'Grade 9-12',
          class: 'connect__g912',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
