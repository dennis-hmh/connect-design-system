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

Disabled.args = {
  ...Default.args,
  disabled: true,
};
