import React, { useRef, useEffect, useState } from 'react';
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
  const [selectedValue, setSelectedValue] = useState(args.value || '');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    setSelectedValue(args.value || '');
  }, [args.value]);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <SelectBox {...args} value={selectedValue} onChange={handleChange} />
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
  value: '',
  correct: false,
  incorrect: false,
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

SelectedValue.args = {
  ...Default.args,
  value: 'option-5',
};

Correct.args = {
  ...Default.args,
  correct: true,
};

Incorrect.args = {
  ...Default.args,
  value: 'option-2',
  incorrect: true,
};

AnswerShown.args = {
  ...Default.args,
  value: 'option-3',
  answerShown: true,
};

Disabled.args = {
  ...Default.args,
  value: 'option-4',
  disabled: true,
};
