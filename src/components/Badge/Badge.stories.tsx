import React, { useRef } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';
import { Avatar } from '../Avatar/Avatar';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const Template: StoryFn<BadgeProps> = (args) => {
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

// Base Avatar for examples
const DemoAvatar = () => (
  <Avatar src="/images/zelda.jpg" alt="User avatar" size="md" shape="circle" />
);
const InitialsAvatar = () => (
  <Avatar alt="User Avatar" backgroundColor="primary-mid" shape="circle" aria-label="avatar">
    JD
  </Avatar>
);

// Basic Examples
export const Dot: Story = Template.bind({});
Dot.args = {
  color: 'primary-mid',
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
  gradeBand: GradeBand.G4_5,
  'aria-label': 'notification',
};

export const Content: Story = Template.bind({});
Content.args = {
  ...Dot.args,
  children: <InitialsAvatar />,
  variant: 'standard',
  badgeContent: 4,
  color: 'surface-mid',
  'aria-label': 'notifications count',
};

// Color Examples
export const Colors: Story = Template.bind({});
Colors.args = {
  ...Content.args,
  color: 'error-mid',
  'aria-label': 'error notification',
};

// Badge Visibility
export const Invisible: Story = Template.bind({});
Invisible.args = {
  ...Dot.args,
  variant: 'invisible',
};

export const ShowZero: Story = Template.bind({});
ShowZero.args = {
  ...Content.args,
  badgeContent: 0,
  showZero: true,
};

// Maximum Value
export const MaxValue: Story = Template.bind({});
MaxValue.args = {
  ...Content.args,
  badgeContent: 1000,
  max: 999,
};

// Badge Alignment
export const Alignment: Story = Template.bind({});
Alignment.args = {
  ...Content.args,
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
};

export const OnlineStatus: Story = Template.bind({});
OnlineStatus.args = {
  ...Dot.args,
  children: <DemoAvatar />,
  variant: 'dot',
  color: 'success-mid',
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  'aria-label': 'Online status',
};

export const AvatarBadge: Story = Template.bind({});
AvatarBadge.args = {
  ...Content.args,

  children: <DemoAvatar />,
  variant: 'standard',
  color: 'transparent',
  badgeContent: (
    <Avatar src="/images/zelda.jpg" alt="Collaborator avatar" size="xs" shape="circle" />
  ),
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  'aria-label': 'Collaborator avatar',
};
export const CombinedBadges: Story = Template.bind({});
CombinedBadges.args = {
  ...Content.args,

  children: (
    <Badge
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      color="transparent"
      badgeContent={
        <Avatar src="/images/zelda.jpg" alt="Collaborator avatar" size="xs" shape="circle" />
      }
      variant="standard"
    >
      <DemoAvatar />
    </Badge>
  ),
  variant: 'dot',
  color: 'success-mid',
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
  'aria-label': 'Online status and collaborator',
};
