import React from 'react';
import { Chip } from './Chip';

export default {
  component: Chip,
  title: 'Chip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Number = (args) => <Chip {...args} />;
export const TotalNumber = (args) => <Chip {...args} />;

Number.args = {
  children: 'Chip Text',
  num: 10,
  totalNum: '',
};

TotalNumber.args = {
  ...Number.args,
  totalNum: 11,
};
