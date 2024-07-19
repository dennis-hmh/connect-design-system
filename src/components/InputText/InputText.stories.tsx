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
export const AnswerShown = (args) => <InputText {...args} />;
export const Disabled = (args) => <InputText {...args} />;
export const Number = (args) => <InputText {...args} />;

Default.args = {
  correct: false,
  incorrect: false,
  defaultText: '',
  number: false,
  disabled: false,
  answerShown: false,
};

Correct.args = {
  ...Default.args,
  correct: true,
  defaultText: 'Answer correct',
  disabled: true,
};

InCorrect.args = {
  ...Default.args,
  incorrect: true,
  defaultText: 'Answer incorrect',
  disabled: true,
};

AnswerShown.args = {
  ...Default.args,
  answerShown: true,
  defaultText: 'Answer shown',
};

Disabled.args = {
  ...Default.args,
  defaultText: 'Disabled',
  disabled: true,
};

Number.args = {
  ...Default.args,
  defaultText: 100,
  number: true,
};
