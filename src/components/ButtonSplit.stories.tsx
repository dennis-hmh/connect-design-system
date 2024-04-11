import React from 'react';
import { ButtonSplit } from './ButtonSplit';

export default {
  component: ButtonSplit,
  title: 'Button Split',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/9iretC8KPFzFM1RfV4Cezm/3-12-UI-system?type=design&node-id=583%3A5057&mode=dev',
    },
  },
};

export const Primary = (args) => <ButtonSplit {...args} />;

Primary.args = {
  children: 'Split Button',
  data: [
    { label: '', value: 'Item 1' },
    { label: '', value: 'Item 2' },
    { label: '', value: 'Item 3' },
    { label: '', value: 'Item 4' },
    { label: '', value: 'Item 5' },
  ],
  disabled: false,
};
