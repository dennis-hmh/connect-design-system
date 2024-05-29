import React from 'react';
import { SelectBox } from './SelectBox';

export default {
  component: SelectBox,
  title: 'Select Box',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => (
  <div style={{ minWidth: '180px' }}>
    <SelectBox {...args} />
  </div>
);
export const Correct = (args) => (
  <div style={{ minWidth: '180px' }}>
    <SelectBox {...args} />
  </div>
);
export const Incorrect = (args) => (
  <div style={{ minWidth: '180px' }}>
    <SelectBox {...args} />
  </div>
);
export const AnswerShown = (args) => (
  <div style={{ minWidth: '180px' }}>
    <SelectBox {...args} />
  </div>
);
export const Disabled = (args) => (
  <div style={{ minWidth: '180px' }}>
    <SelectBox {...args} />
  </div>
);

Default.args = {
  correct: false,
  incorrect: false,
  disabled: false,
  data: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Option 4', value: 'option-4' },
    { label: 'Option 5', value: 'option-5' },
  ],
};

Correct.args = {
  ...Default.args,
  correct: true,
};

Incorrect.args = {
  ...Default.args,
  incorrect: true,
};

AnswerShown.args = {
  ...Default.args,
  answerShown: true,
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
