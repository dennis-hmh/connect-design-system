import React from 'react';
import Typography from './Typography';

export default {
  component: Typography,
  title: 'Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <Typography {...args} />;

Default.args = {
  children: 'Typography',
  element: 'h1',
  color: '',
  family: 'sans',
  size: '',
  style: 'normal',
  weight: '',
  letterSpacing: '',
  textAlign: '',
  textTransform: '',
  className: '',
};
