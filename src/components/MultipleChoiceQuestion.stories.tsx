import React from 'react';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';

export default {
  component: MultipleChoiceQuestion,
  title: 'MCQ',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/sYNh2CVOzu9zZZTrXBSneQ/3-12-UI-Starter-Kit?type=design&node-id=169%3A5490&mode=design&t=kQMSIlVeqiaeDUoy-1',
    },
  },
};

export const Default = (args) => <MultipleChoiceQuestion {...args} />;
export const Checked = (args) => <MultipleChoiceQuestion {...args} />;
export const Correct = (args) => <MultipleChoiceQuestion {...args} />;
export const Incorrect = (args) => <MultipleChoiceQuestion {...args} />;
export const AnswerShown = (args) => <MultipleChoiceQuestion {...args} />;
export const Disabled = (args) => <MultipleChoiceQuestion {...args} />;

Default.args = {
  type: 'checkbox',
  image: false,
  id: 'answer',
  name: 'mcq',
  disabled: false,
  correct: false,
  incorrect: false,
  shown: false,
  checked: false,
  children: 'The mouse rides a bike',
};

Checked.args = {
  ...Default.args,
};

Correct.args = {
  ...Default.args,
  correct: true,
  checked: true,
};

Incorrect.args = {
  ...Default.args,
  incorrect: true,
};

AnswerShown.args = {
  ...Default.args,
  answerShown: true,
  value: 'answer shown',
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
