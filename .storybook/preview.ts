import React from 'react';
import { Preview } from '@storybook/react';

import '../src/assets/css/source.css';
import '../src/assets/scss/custom.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
