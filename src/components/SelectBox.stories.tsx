import { SelectBox } from './SelectBox';

export default {
  component: SelectBox,
  title: 'Select Box',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <SelectBox {...args} />;
export const Correct = (args) => <SelectBox {...args} />;
export const Incorrect = (args) => <SelectBox {...args} />;
export const Disabled = (args) => <SelectBox {...args} />;

Default.args = {
  correct: false,
  incorrect: false,
  disabled: false,
  value: '',
};

Correct.args = {
  ...Default.args,
  correct: true,
};

Incorrect.args = {
  ...Default.args,
  incorrect: true,
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
