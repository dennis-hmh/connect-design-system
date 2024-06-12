import React from 'react';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <Icon {...args} />;

Default.args = {
  id: 'add',
  size: 'md',
  fill: '',
  stroke: '',
  focusable: false,
};
