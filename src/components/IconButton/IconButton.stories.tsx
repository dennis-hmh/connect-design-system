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
  args: {
    gradeBand: GradeBand.G4_5,
  },
  argTypes: {
    //are the following needed at all
    tabIndex: { table: { disable: true } },
    onFocusVisible: { table: { disable: true } },
    onKeyDown: { table: { disable: true } },
    onKeyUp: { table: { disable: true } },
    onMouseDown: { table: { disable: true } },
    onMouseLeave: { table: { disable: true } },
    classes: { table: { disable: true } },
    ariaDescribedby: { table: { disable: true } },
    ariaLabelledby: { table: { disable: true } },
    ariaHidden: { table: { disable: true } },
    ariaExpanded: { table: { disable: true } },
    ariaControls: { table: { disable: true } },
    ariaPressed: { table: { disable: true } },
    role: { table: { disable: true } },
    autoFocus: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const Template: StoryFn<IconButtonProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [classes, setClasses] = useState<string>('');

  const handleClick = () => {
    setClicked(!clicked);

    setClasses((prevClasses) =>
      clicked
        ? prevClasses.replace('connect__selected', '').trim()
        : `${prevClasses} connect__selected`.trim(),
    );
  };

  return (
    <ConnectTheme gradeBand={args.gradeBand || GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <IconButton {...args} onClick={handleClick} classes={classes} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: <Icon id="add" size="sm" />,
  variant: 'contained',
  color: 'primary',
  rounded: false,
  state: undefined,
  size: 'md',
  ariaLabel: 'Add',
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

export const Small: Story = Template.bind({});
Small.args = {
  ...Default.args,
  classes: 'connect__button-this-is-new',
  size: 'sm',
};

export const Plain: Story = Template.bind({});
Plain.args = {
  ...Default.args,
  variant: 'plain',
};

export const Flat: Story = Template.bind({});
Flat.args = {
  ...Default.args,
  variant: 'plain',
  disableElevation: true,
};

export const Text: Story = Template.bind({});
Text.args = {
  ...Default.args,
  variant: 'text',
};

export const Rounded: Story = Template.bind({});
Rounded.args = {
  ...Default.args,
  children: <Icon id="replay" size="sm" />,
  rounded: true,
  ariaLabel: 'Rounded button with reload icon',
};

export const SemanticColor: Story = Template.bind({});
SemanticColor.args = {
  ...Default.args,
  color: 'positive',
};

export const IconColor: Story = Template.bind({});
IconColor.args = {
  ...Default.args,
  children: <Icon id="replay" size="sm" fill="primary-400" />,
  rounded: true,
  variant: 'plain',
  ariaLabel: 'Plain reload rounded button custom icon color',
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
