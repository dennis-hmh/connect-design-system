import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';
import { Stack } from '../Stack/Stack';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Input/Textarea',
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
type Story = StoryObj<typeof Textarea>;

const Template: StoryFn<TextareaProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(args.value || '');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <ConnectTheme gradeBand={args.gradeBand || GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Textarea {...args} value={value} onChange={handleChange} />
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
export const Toolbar: Story = Template.bind({});
export const Disabled: Story = Template.bind({});

Default.args = {
  value: '',
  placeholderText: undefined,
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
  charLimit: 100,
  value: 'This is some default text',
};

CharacterCounterLimit.args = {
  ...Default.args,
  value:
    'This is example text that is more than one hundred characters long, including spaces and punctuation.',
  charLimit: 100,
};

Toolbar.args = {
  ...Default.args,
  toolbar: (
    <Stack
      element="header"
      className="connect__toolbar"
      xs={{
        alignItems: 'center',
        justifyContent: 'space-between',
        direction: 'row',
        flexWrap: 'nowrap',
        paddingX: 'md',
        paddingY: 'sm',
      }}
    >
      <ButtonMenu iconId="add" />
      <ButtonMenu iconId="mic" backgroundColor="primary-mid" fill="white" />
    </Stack>
  ),
  placeholderText: 'Input your response',
  characterCount: true,
  charLimit: 500,
};

Correct.args = {
  ...Default.args,
  correct: true,
  value: 'Answer correct',
  characterCount: true,
  charLimit: 100,
};

Incorrect.args = {
  ...Default.args,
  correct: false,
  incorrect: true,
  value: 'Answer incorrect',
  characterCount: true,
  charLimit: 100,
};

AnswerShown.args = {
  ...Default.args,
  answerShown: true,
  value: 'Answer shown',
  characterCount: true,
  charLimit: 100,
};

Disabled.args = {
  ...Default.args,
  value: 'Disabled',
  characterCount: true,
  charLimit: 100,
  disabled: true,
};
