import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
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

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Textarea {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const Placeholder: Strory = Template.bind({});
export const DefaultText: Story = Template.bind({});
export const CharacterCounter: Story = Template.bind({});
export const CharacterLimit: Story = Template.bind({});
export const Correct: Story = Template.bind({});
export const Incorrect: Story = Template.bind({});
export const AnswerShown: Story = Template.bind({});
export const Toolbar: Story = Template.bind({});
export const Disabled: Story = Template.bind({});

Default.args = {
  defaultText: undefined,
  placeholder: undefined,
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

CharacterCounter.args = {
  ...Default.args,
  defaultText: 'This is some default text',
  characterCount: true,
};

CharacterLimit.args = {
  ...Default.args,
  characterCount: true,
  characterLimit: 100,
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
      <ButtonMenu iconId="mic" backgroundColor="connect__blue-s50" fill="white" />
    </Stack>
  ),
  placeholderText: 'Input your response',
  characterCount: true,
  characterLimit: 500,
};

Correct.args = {
  ...Default.args,
  correct: true,
  defaultText: 'Answer correct',
  characterCount: true,
  characterLimit: 100,
};

Incorrect.args = {
  ...Default.args,
  correct: false,
  incorrect: true,
  defaultText: 'Answer incorrect',
  characterCount: true,
  characterLimit: 100,
};

AnswerShown.args = {
  ...Default.args,
  answerShown: true,
  defaultText: 'Answer shown',
  characterCount: true,
  characterLimit: 100,
};

Disabled.args = {
  ...Default.args,
  defaultText: 'Disabled',
  characterCount: true,
  characterLimit: 100,
  disabled: true,
};
