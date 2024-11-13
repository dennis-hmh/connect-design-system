import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Timer, TimerProps } from './Timer';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Timer> = {
  component: Timer,
  title: 'Misc/Timer',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Timer>;

const Template: StoryFn<TimerProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Timer {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  time: 300000,
  onTimeUp: () => console.log('Times up!'),
  size: undefined,
  className: '',
  ariaLive: 'off',
  progressBar: false,
  gradeBand: GradeBand.G4_5,
};

export const WithProgressBar: Story = Template.bind({});
WithProgressBar.args = {
  ...Default.args,
  time: 60000,
  progressBar: true,
};
