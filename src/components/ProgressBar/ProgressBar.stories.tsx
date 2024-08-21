import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'Progress Bar',
  tags: ['autodocs'],
  parameters: {
    // layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

const Template: StoryFn<ProgressBarProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <ProgressBar {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const Colors: Story = Template.bind({});

Default.args = {
  value: 25,
  max: 100,
  backgroundColor: undefined,
  barColor: undefined,
  gradeBand: GradeBand.G4_5,
};

Colors.args = {
  ...Default.args,
  value: 50,
  backgroundColor: 'golden-c30',
  barColor: 'purple-s50',
};
