import React, { useRef } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';
import { Avatar } from '../Avatar/Avatar';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof AvatarGroup> = {
  title: 'WIP/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const Template: StoryFn<AvatarGroupProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <AvatarGroup {...args} />
      </div>
    </ConnectTheme>
  );
};

const avatars = [
  <Avatar key="1" alt="Avatar 1" backgroundColor="primary-mid" shape="circle">
    A
  </Avatar>,
  <Avatar key="2" alt="Avatar 2" backgroundColor="success-mid" shape="circle">
    B
  </Avatar>,
  <Avatar key="3" alt="Avatar 3" backgroundColor="error-mid" shape="circle">
    C
  </Avatar>,
  <Avatar key="4" alt="Avatar 4" backgroundColor="focus-mid" shape="circle">
    D
  </Avatar>,
  <Avatar key="5" alt="Avatar 5" backgroundColor="hint-mid" shape="circle">
    E
  </Avatar>,
];

const imageAvatars = [
  <Avatar key="1" alt="User Avatar 1" src="/images/zelda.jpg" shape="circle" />,
  <Avatar key="2" alt="User Avatar 2" src="/images/zelda.jpg" shape="circle" />,
  <Avatar key="3" alt="User Avatar 3" src="/images/zelda.jpg" shape="circle" />,
  <Avatar key="4" alt="User Avatar 4" src="/images/zelda.jpg" shape="circle" />,
  <Avatar key="5" alt="User Avatar 5" src="/images/zelda.jpg" shape="circle" />,
];

export const Default: Story = Template.bind({});
Default.args = {
  children: avatars,
  max: 5,
  spacing: 'sm',
  variant: 'standard',
  gradeBand: GradeBand.G4_5,
};

export const Images: Story = Template.bind({});
Images.args = {
  ...Default.args,
  children: imageAvatars,
};

export const Grouped: Story = Template.bind({});
Grouped.args = {
  ...Default.args,
  variant: 'grouped',
};

export const CustomSpacing: Story = Template.bind({});
CustomSpacing.args = {
  ...Default.args,
  spacing: 'md',
  variant: 'grouped',
};

export const CustomSurplus: Story = Template.bind({});
CustomSurplus.args = {
  ...Default.args,
  max: 3,
  children: [...avatars, ...imageAvatars],
  renderSurplus: (surplus: number) => (
    <Avatar alt={`+${surplus} users`} backgroundColor="primary-mid" shape="circle" size="md">
      +{surplus}
    </Avatar>
  ),
};

export const WithTotal: Story = Template.bind({});
WithTotal.args = {
  ...Default.args,
  max: 3,
  total: 10,
  children: avatars.slice(0, 3),
  renderSurplus: (surplus: number) => (
    <Avatar alt={`+${surplus} users`} backgroundColor="primary-mid" shape="circle">
      +{surplus}
    </Avatar>
  ),
};
