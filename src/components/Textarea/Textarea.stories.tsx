import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';
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
export const MaxLength: Story = Template.bind({});

Default.args = {
  correct: false,
  incorrect: false,
  defaultText: 'Default Text!!',
  disabled: false,
  answerShown: false,
  maxLength: undefined,
  gradeBand: GradeBand.G4_5,
};

MaxLength.args = {
  ...Default.args,
  maxLength: 100,
};
