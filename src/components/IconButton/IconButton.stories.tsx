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
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <IconButton {...args} onClick={handleClick} classes={clickedClass} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: <Icon id="add" size="md" />,
  backgroundColor: '',
  ariaLabel: 'Add',
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

export const BackgroundColor: Story = Template.bind({});
BackgroundColor.args = {
  ...Default.args,
  children: <Icon id="add" size="md" fill="white" />,
  backgroundColor: 'essential-guide-purple',
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
