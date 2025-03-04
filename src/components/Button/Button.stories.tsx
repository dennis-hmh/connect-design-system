import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    gradeBand: GradeBand.G4_5,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template: StoryFn<ButtonProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Button {...args} />
      </div>
    </ConnectTheme>
  );
};

// Base Variants
export const PrimaryContained: Story = Template.bind({});
PrimaryContained.args = {
  children: <Typography>Primary Button</Typography>,
  classes: '',
  variant: 'contained',
  color: 'primary',
  ariaLabel: 'Primary Button',
};

export const SecondaryOutlined: Story = Template.bind({});
SecondaryOutlined.args = {
  children: <Typography>Secondary Button</Typography>,
  variant: 'outlined',
  color: 'secondary',
  ariaLabel: 'Secondary Button',
};

export const TextButton: Story = Template.bind({});
TextButton.args = {
  children: <Typography>Text Button</Typography>,
  variant: 'text',
  color: 'primary',
  ariaLabel: 'Text Button',
};

export const StartIconButton: Story = Template.bind({});
StartIconButton.args = {
  children: (
    <>
      <Icon id="arrowUp" size="md" />
      <Typography>Start Icon Button</Typography>
    </>
  ),
  variant: 'contained',
  color: 'primary',
  ariaLabel: 'Start Icon Button',
};

export const EndIconButton: Story = Template.bind({});
EndIconButton.args = {
  children: (
    <>
      <Typography>End Icon Button</Typography>
      <Icon id="arrowUp" size="md" />
    </>
  ),
  variant: 'contained',
  color: 'primary',
  ariaLabel: 'End Icon Button',
};

export const StartEndIconButton: Story = Template.bind({});
StartEndIconButton.args = {
  children: (
    <>
      <Icon id="arrowUp" size="md" />
      <Typography>Start and End Icon Button</Typography>
      <Icon id="arrowDown" size="md" />
    </>
  ),
  variant: 'contained',
  color: 'primary',
  ariaLabel: 'Start and End Icon Button',
};

export const IconOnlyButton: Story = Template.bind({});
IconOnlyButton.args = {
  children: <Icon id="arrowUp" size="md" />,
  variant: 'contained',
  color: 'primary',
  ariaLabel: 'Icon Button Up Arrow',
};

export const DisabledButton: Story = Template.bind({});
DisabledButton.args = {
  children: <Typography>Disabled Button</Typography>,
  variant: 'contained',
  color: 'primary',
  disabled: true,
  ariaLabel: 'Disabled Button',
};

export const LoadingButton: Story = Template.bind({});
LoadingButton.args = {
  children: (
    <>
      <Icon id="loader" size="md" />
      <Typography>Loading Button</Typography>
    </>
  ),
  classes: 'connect__button-loading',
  variant: 'contained',
  color: 'primary',
  ariaLabel: 'Loading Button',
};

export const SmallButton: Story = Template.bind({});
SmallButton.args = {
  children: <Typography>Small Button</Typography>,
  variant: 'contained',
  color: 'primary',
  size: 'sm',
  ariaLabel: 'Small Button',
};

export const LargeButton: Story = Template.bind({});
LargeButton.args = {
  children: <Typography>Large Button</Typography>,
  variant: 'contained',
  color: 'primary',
  size: 'lg',
  ariaLabel: 'Large Button',
};

export const NoElevationButton: Story = Template.bind({});
NoElevationButton.args = {
  children: <Typography>No Elevation</Typography>,
  variant: 'contained',
  color: 'primary',
  disableElevation: true,
  ariaLabel: 'No Elevation Button',
};

export const FullWidthButton: Story = Template.bind({});
FullWidthButton.args = {
  children: <Typography>Full Width Button</Typography>,
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
  ariaLabel: 'Full Width Button',
};
