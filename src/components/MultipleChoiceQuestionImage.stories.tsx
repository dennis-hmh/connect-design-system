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
export const Disabled = (args) => <MultipleChoiceQuestionImage {...args} />;

Default.args = {
  type: 'checkbox',
  image: true,
  id: 'answer',
  name: 'mcq',
  disabled: false,
  correct: false,
  incorrect: false,
  children: 'The mouse rides a bike',
};

Checked.args = {
  ...Default.args,
};

Correct.args = {
  ...Default.args,
  checked: true,
  disabled: true,
};

Incorrect.args = {
  ...Default.args,
  disabled: true,
  incorrect: true,
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
