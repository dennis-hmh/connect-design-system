import React from 'react';
import { Meta } from '@storybook/react';
import { SelectBox } from './SelectBox';

export default {
  component: SelectBox,
  title: 'Select Box',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: typeof SelectBox = (args) => <SelectBox {...args} />;
export const Default = Template.bind({});
export const SelectedValue = Template.bind({});
export const Correct = Template.bind({});
export const Incorrect = Template.bind({});
export const AnswerShown = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  data: [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
    { value: 'option-5', label: 'Option 5' },
  ],
  defaultValue: '',
  correct: false,
  incorrect: false,
  disabled: false,
};

SelectedValue.args = {
  ...Default.args,
  defaultValue: 'option-5',
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
