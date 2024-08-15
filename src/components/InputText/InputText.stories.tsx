import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { InputText, InputTextProps } from './InputText';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof InputText> = {
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

export default meta;
type Story = StoryObj<typeof InputText>;

const Template: StoryFn<InputTextProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <InputText {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const Correct: Story = Template.bind({});
export const InCorrect: Story = Template.bind({});
export const AnswerShown: Story = Template.bind({});
export const Disabled: Story = Template.bind({});
export const Number: Story = Template.bind({});

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
