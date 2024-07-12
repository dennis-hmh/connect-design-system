import React from 'react';
import Toolbar from '../components/Toolbar';

export default {
  component: Toolbar,
  title: 'Components/Toolbar',
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
    // design: {
    //   type: 'figma',
    //   url: '',
    // },
  },
};

export const Default = (args) => <Toolbar {...args} />;
export const WithChildren = (args) => <Toolbar {...args} />;

Default.args = {};

WithChildren.args = {
  ...Default.args,
};
