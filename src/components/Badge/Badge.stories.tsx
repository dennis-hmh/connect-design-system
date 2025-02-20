import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';
import { Avatar } from '../Avatar/Avatar';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Badge> = {
  title: 'wip/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const Template: StoryFn<BadgeProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Badge {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: (
    <Avatar src="https://picsum.photos/600/400" alt="User avatar" size="md" shape="circle" />
  ),
  badgeContent: 4,
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
  variant: 'standard',
  color: 'primary-mid',
  max: undefined,
  showZero: false,
  gradeBand: GradeBand.G4_5,

  'aria-label': 'notifications count',
};

export const Dot: Story = Template.bind({});
Dot.args = {
  ...Default.args,
  variant: 'dot',
  color: 'success-mid',
  'aria-label': 'online status',
};

export const CustomPlacement: Story = Template.bind({});
CustomPlacement.args = {
  ...Default.args,
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  color: 'error-mid',
};

export const MaxValue: Story = Template.bind({});
MaxValue.args = {
  ...Default.args,
  badgeContent: 1000,
  max: 999,
};

export const ShowZero: Story = Template.bind({});
ShowZero.args = {
  ...Default.args,
  badgeContent: 0,
  showZero: true,
};
