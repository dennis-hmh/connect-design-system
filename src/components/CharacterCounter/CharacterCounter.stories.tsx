import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { CharacterCounter, CharacterCounterProps } from './CharacterCounter';
import { Stack } from '../Stack/Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof CharacterCounter> = {
  component: CharacterCounter,
  title: 'Misc/CharacterCounter',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCounter>;

const Template: StoryFn<CharacterCounterProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand || GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <CharacterCounter {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const charLimit: Story = Template.bind({});
export const charLimitReached: Story = Template.bind({});

Default.args = {
  charCount: 0,
  charLimit: 100,
  gradeBand: GradeBand.G4_5,
};

charLimit.args = {
  ...Default.args,
  charCount: 50,
  charLimit: 100,
};

charLimitReached.args = {
  ...charLimit.args,
  charCount: 101,
};
