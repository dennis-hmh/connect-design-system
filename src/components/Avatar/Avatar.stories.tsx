import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const Template: StoryFn<AvatarProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Avatar {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: 'JD',
  size: 'md',
  shape: 'circle',
  backgroundColor: 'primary-mid',
  color: 'white',
  gradeBand: GradeBand.G4_5,
};

export const ImageAvatar: Story = Template.bind({});
ImageAvatar.args = {
  ...Default.args,
  src: '/images/zelda.jpg',
  alt: 'User avatar',
};

export const SmallAvatar: Story = Template.bind({});
SmallAvatar.args = {
  ...Default.args,
  size: 'sm',
};

export const LargeAvatar: Story = Template.bind({});
LargeAvatar.args = {
  ...Default.args,
  size: 'lg',
};

export const ImageLargeAvatar: Story = Template.bind({});
ImageLargeAvatar.args = {
  ...Default.args,
  src: '/images/zelda.jpg',
  alt: 'User avatar',
  size: 'lg',
};

export const ExtraLargeAvatar: Story = Template.bind({});
ExtraLargeAvatar.args = {
  ...Default.args,
  size: 'xl',
};

export const SquareAvatar: Story = Template.bind({});
SquareAvatar.args = {
  ...Default.args,
  shape: 'square',
};

export const RoundedAvatar: Story = Template.bind({});
RoundedAvatar.args = {
  ...Default.args,
  shape: 'rounded',
};

export const CustomBackground: Story = Template.bind({});
CustomBackground.args = {
  ...Default.args,
  backgroundColor: 'focus-dark',
};

export const CustomColor: Story = Template.bind({});
CustomColor.args = {
  ...Default.args,
  color: 'focus-pale',
};

export const CustomBackgroundAndColor: Story = Template.bind({});
CustomBackgroundAndColor.args = {
  ...Default.args,
  backgroundColor: 'focus-pale',
  color: 'surface-dark',
};

export const CustomWeight: Story = Template.bind({});
CustomWeight.args = {
  ...Default.args,
  weight: 700,
};
