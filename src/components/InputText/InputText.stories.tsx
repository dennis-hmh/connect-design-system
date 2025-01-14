import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { InputText, InputTextProps } from './InputText';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { on } from 'events';

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

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <InputText {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const Placeholder: Story = Template.bind({});
export const DefaultText: Story = Template.bind({});
export const CharacterCounter: Story = Template.bind({});
export const CharacterLimit: Story = Template.bind({});
export const Correct: Story = Template.bind({});
export const Incorrect: Story = Template.bind({});
export const AnswerShown: Story = Template.bind({});
export const Disabled: Story = Template.bind({});
export const Number: Story = Template.bind({});

Default.args = {
  defaultText: '',
  placeholderText: '',
  characterCount: false,
  characterLimit: undefined,
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
  defaultText: 'This is default text',
};

export const OnClearWIP: Story = Template.bind({});
OnClearWIP.args = {
  ...Default.args,
  defaultText: 'This is default text',
  onClear: () => {
    console.log('Clearing text');
  },
};

CharacterCounter.args = {
  ...Default.args,
  defaultText: 'This is some default text',
  characterCount: true,
};

CharacterLimit.args = {
  ...Default.args,
  characterCount: true,
  characterLimit: 50,
};

Correct.args = {
  ...Default.args,
  correct: true,
  defaultText: 'Answer correct',
  characterCount: true,
  characterLimit: 50,
};

Incorrect.args = {
  ...Default.args,
  incorrect: true,
  defaultText: 'Answer incorrect',
  characterCount: true,
  characterLimit: 50,
};

AnswerShown.args = {
  ...Default.args,
  answerShown: true,
  defaultText: 'Answer shown',
  characterCount: true,
  characterLimit: 50,
};

Disabled.args = {
  ...Default.args,
  defaultText: 'Disabled',
  characterCount: true,
  characterLimit: 50,
};

Number.args = {
  ...Default.args,
  defaultText: 50,
  number: true,
};
