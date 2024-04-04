import React from 'react';
import { ButtonSplit } from './ButtonSplit';
import { DownArrow } from '../assets/images/arrow-down-white.svg';

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
export const Secondary = (args) => <ButtonSplit {...args} />;

Primary.args = {
  childrenOne: 'Check',
  childrenTwo: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        fill="#fff"
        d="M4.707 7.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L10 12.586 4.707 7.293Z"
      />
    </svg>
  ),
  primary: true,
  correct: false,
  incorrect: false,
  disabled: false,
};

Secondary.args = {
  ...Primary.args,
  primary: false,
};
