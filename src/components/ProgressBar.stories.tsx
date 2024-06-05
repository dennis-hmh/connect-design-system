import React from 'react';
import { ProgressBar } from './ProgressBar';

export default {
  component: ProgressBar,
  title: 'Progress Bar',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const Default = (args) => <ProgressBar {...args} />;
export const Colors = (args) => <ProgressBar {...args} />;

Default.args = {
  value: 25,
  max: 100,
  backgroundColor: '',
  barColor: '',
};

Colors.args = {
  ...Default.args,
  value: 50,
  backgroundColor: 'golden-c30',
  barColor: 'purple-s50',
};
