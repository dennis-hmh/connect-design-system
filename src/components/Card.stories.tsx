import React from 'react';
import { Card } from './Card';

export default {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const Default = (args) => <Card {...args} />;

Default.args = {};
