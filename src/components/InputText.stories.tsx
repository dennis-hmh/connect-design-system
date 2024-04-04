import React from 'react';
import { InputText } from './InputText';

export default {
  component: InputText,
  title: 'Input Text',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const Default = (args) => <InputText {...args} />;
export const Correct = (args) => <InputText {...args} />;
export const InCorrect = (args) => <InputText {...args} />;
export const Disabled = (args) => <InputText {...args} />;
export const Number = (args) => <InputText {...args} />;

Default.args = {
  correct: false,
  incorrect: false,
  value: '',
  number: false,
  disabled: false,
};

Correct.args = {
  ...Default.args,
  correct: true,
  value: 'answer',
  disabled: true,
};

InCorrect.args = {
  ...Default.args,
  incorrect: true,
  value: 'answer',
};

Disabled.args = {
  ...Default.args,
  value: 'answer',
  disabled: true,
};

Number.args = {
  ...Default.args,
  value: 1,
  number: true,
};
