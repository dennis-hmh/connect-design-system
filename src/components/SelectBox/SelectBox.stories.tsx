import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { SelectBox, SelectBoxProps } from './SelectBox';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof SelectBox> = {
  component: SelectBox,
  title: 'Input/Select Box',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

const Template: StoryFn<SelectBoxProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <SelectBox {...args} />
      </div>
    </ConnectTheme>
  );
};

const options = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
  { value: 'option-4', label: 'Option 4' },
  { value: 'option-5', label: 'Option 5' },
];

export const Default: Story = Template.bind({});
export const SelectedValue: Story = Template.bind({});
export const Correct: Story = Template.bind({});
export const Incorrect: Story = Template.bind({});
export const AnswerShown: Story = Template.bind({});
export const Disabled: Story = Template.bind({});

Default.args = {
  data: options,
  defaultValue: '',
  correct: false,
  incorrect: false,
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

SelectedValue.args = {
  ...Default.args,
  defaultValue: 'option-5',
};

Correct.args = {
  ...Default.args,
  correct: true,
};

Incorrect.args = {
  ...Default.args,
  incorrect: true,
};

AnswerShown.args = {
  ...Default.args,
  answerShown: true,
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
