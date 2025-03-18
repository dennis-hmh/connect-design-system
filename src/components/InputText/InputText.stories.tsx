import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { InputText, InputTextProps } from './InputText';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof InputText> = {
  component: InputText,
  title: 'Input/Input Text',
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
  const [value, setValue] = useState(args.value || '');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <InputText {...args} value={value} onChange={handleChange} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const Placeholder: Story = Template.bind({});
export const DefaultText: Story = Template.bind({});
export const CharacterCounter: Story = Template.bind({});
export const CharacterCounterLimit: Story = Template.bind({});
export const Correct: Story = Template.bind({});
export const Incorrect: Story = Template.bind({});
export const AnswerShown: Story = Template.bind({});
export const Disabled: Story = Template.bind({});
export const Number: Story = Template.bind({});
export const OnClearWIP: Story = Template.bind({});

Default.args = {
  value: '',
  placeholderText: '',
  color: undefined,
  charLimit: undefined,
  correct: false,
  incorrect: false,
  answerShown: false,
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

Placeholder.args = {
  ...Default.args,
  placeholderText: 'Type here...',
};

DefaultText.args = {
  ...Default.args,
  value: 'This is default text',
};

CharacterCounter.args = {
  ...Default.args,
  value: 'This is some default text',
  charLimit: 50,
};

CharacterCounterLimit.args = {
  ...Default.args,
  value: 'This is text that is more than fifty characters long',
  charLimit: 50,
};

Correct.args = {
  ...Default.args,
  correct: true,
  value: 'Answer correct',
  charLimit: 50,
  disabled: true,
};

Incorrect.args = {
  ...Default.args,
  incorrect: true,
  value: 'Answer incorrect',
  charLimit: 50,
  disabled: true,
};

AnswerShown.args = {
  ...Default.args,
  answerShown: true,
  value: 'Answer shown',
  charLimit: 50,
  disabled: true,
};

Disabled.args = {
  ...Default.args,
  value: 'Disabled',
  charLimit: 50,
  disabled: true,
};

Number.args = {
  ...Default.args,
  value: 50,
  number: true,
};

OnClearWIP.args = {
  ...Default.args,
  value: 'This is default text',
  onClear: () => {
    console.log('Clearing text');
  },
};
