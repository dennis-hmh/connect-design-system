import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { IconButton, IconButtonProps } from './IconButton';
import { Icon } from '../Icon/Icon';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Buttons/Icon Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const Template: StoryFn<IconButtonProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const clickedClass = clicked ? 'connect__selected' : '';

  return (
    <ConnectTheme gradeBand={args.gradeBand || GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <IconButton {...args} clickHandler={handleClick} classes={clickedClass} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: <Icon id="add" size="md" />,
  variant: 'contained',
  color: 'primary',
  rounded: false,
  state: undefined,
  ariaLabel: 'Add',
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

export const Small: Story = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'sm',
};

export const Plain: Story = Template.bind({});
Plain.args = {
  ...Default.args,
  variant: 'plain',
};

export const PlainRounded: Story = Template.bind({});
PlainRounded.args = {
  ...Default.args,
  children: <Icon id="replay" size="md" />,
  variant: 'plain',
  rounded: true,
  ariaLabel: 'Plain reload rounded button',
};

export const SemanticColor: Story = Template.bind({});
SemanticColor.args = {
  ...Default.args,
  color: 'positive',
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
