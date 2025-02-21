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
export const CharacterLimit: Story = Template.bind({});
export const CharacterLimitReached: Story = Template.bind({});

Default.args = {
  characterCount: true,
  charCount: 100,
  characterLimit: undefined,
  gradeBand: GradeBand.G4_5,
};

CharacterLimit.args = {
  ...Default.args,
  charCount: 0,
  characterLimit: 100,
};

CharacterLimitReached.args = {
  ...CharacterLimit.args,
  charCount: 101,
};
