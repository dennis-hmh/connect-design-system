import { DragDrop } from './DragDrop';

export default {
  component: DragDrop,
  title: 'Drag Drop',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: true },
  },
};

export const Default = (args) => <DragDrop {...args} />;
export const Correct = (args) => <DragDrop {...args} />;
export const Incorrect = (args) => <DragDrop {...args} />;
export const Disabled = (args) => <DragDrop {...args} />;
export const Drop = (args) => <DragDrop {...args} />;

Default.args = {
  correct: false,
  incorrect: false,
  disabled: false,
  drop: false,
  grade: 'g35',
};

Correct.args = {
  ...Default.args,
  correct: true,
  disabled: true,
};

Incorrect.args = {
  ...Default.args,
  incorrect: true,
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};

Drop.args = {
  ...Default.args,
  drop: true,
};
