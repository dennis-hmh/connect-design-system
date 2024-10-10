import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { InputBox, InputBoxProps } from './InputBox';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof InputBox> = {
  component: InputBox,
  title: 'Input/Input Box',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof InputBox>;

const Template: StoryFn<InputBoxProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <InputBox {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const Checked: Story = Template.bind({});
export const Correct: Story = Template.bind({});
export const Incorrect: Story = Template.bind({});
export const AnswerShown: Story = Template.bind({});
export const Disabled: Story = Template.bind({});

Default.args = {
  type: 'checkbox',
  id: 'answer',
  name: 'input',
  checked: false,
  correct: false,
  incorrect: false,
  disabled: false,
  children: 'The mouse rides a bike',
  gradeBand: GradeBand.G4_5,
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
