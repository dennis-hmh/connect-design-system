import React from 'react';
import { MultipleChoiceQuestionImage } from './MultipleChoiceQuestionImage';

export default {
  component: MultipleChoiceQuestionImage,
  title: 'MCQ Image',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <MultipleChoiceQuestionImage {...args} />;
export const Checked = (args) => <MultipleChoiceQuestionImage {...args} />;
export const Correct = (args) => <MultipleChoiceQuestionImage {...args} />;
export const Incorrect = (args) => <MultipleChoiceQuestionImage {...args} />;
export const AnswerShown = (args) => <MultipleChoiceQuestionImage {...args} />;

export const Disabled = (args) => <MultipleChoiceQuestionImage {...args} />;

Default.args = {
  type: 'checkbox',
  image: true,
  id: 'answer',
  name: 'mcq',
  checked: false,
  disabled: false,
  correct: false,
  incorrect: false,
  children: 'The mouse rides a bike',
};

Checked.args = {
  ...Default.args,
  checked: true,
};

Correct.args = {
  ...Default.args,
  checked: true,
  correct: true,
};

Incorrect.args = {
  ...Default.args,
  checked: true,
  incorrect: true,
};

AnswerShown.args = {
  ...Default.args,
  checked: true,
  answerShown: true,
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
