import React, { useRef, useEffect, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MultipleChoiceQuestion, MultipleChoiceQuestionProp } from './MultipleChoiceQuestion';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof MultipleChoiceQuestion> = {
  component: MultipleChoiceQuestion,
  title: 'Input/Multiple Choice Question',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof MultipleChoiceQuestion>;

const Template: StoryFn<MultipleChoiceQuestionProp> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    args.onChange(event);
  };

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <MultipleChoiceQuestion {...args} checked={checked} onChange={handleChange} />
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
  name: 'mcq',
  checked: false,
  disabled: false,
  correct: false,
  incorrect: false,
  answerShown: false,
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
