import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Typography } from '../Typography/Typography';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { IconId } from '../../utils/icon-list';

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

// Semantic Colors
export const AssistiveButton: Story = Template.bind({});
AssistiveButton.args = {
  children: <Typography>Assistive Button</Typography>,
  variant: 'contained',
  color: 'assistive',
  ariaLabel: 'Assistive Button',
};

export const CautionButton: Story = Template.bind({});
CautionButton.args = {
  children: <Typography>Caution Button</Typography>,
  variant: 'contained',
  color: 'caution',
  ariaLabel: 'Caution Button',
};

export const NegativeButton: Story = Template.bind({});
NegativeButton.args = {
  children: <Typography>Negative Button</Typography>,
  variant: 'contained',
  color: 'negative',
  ariaLabel: 'Negative Button',
};

export const ConstructiveButton: Story = Template.bind({});
ConstructiveButton.args = {
  children: <Typography>Constructive Button</Typography>,
  variant: 'contained',
  color: 'constructive',
  ariaLabel: 'Constructive Button',
};

export const PositiveButton: Story = Template.bind({});
PositiveButton.args = {
  children: <Typography>Positive Button</Typography>,
  variant: 'contained',
  color: 'positive',
  ariaLabel: 'Positive Button',
};

// Icons
export const StartIconButton: Story = Template.bind({});
StartIconButton.args = {
  children: <Typography>Start Icon Button</Typography>,
  variant: 'contained',
  color: 'primary',
  startIcon: 'arrowUp' as IconId,
  iconSize: 'md',
  ariaLabel: 'Start Icon Button',
};

export const EndIconButton: Story = Template.bind({});
EndIconButton.args = {
  children: <Typography>End Icon Button</Typography>,
  variant: 'contained',
  color: 'primary',
  endIcon: 'arrowUp' as IconId,
  iconSize: 'md',
  ariaLabel: 'End Icon Button',
};

export const IconOnlyButton: Story = Template.bind({});
IconOnlyButton.args = {
  children: null,
  variant: 'contained',
  color: 'primary',
  iconId: 'arrowUp',
  iconSize: 'md',
  ariaLabel: 'Icon Button Up Arrow',
};

// States
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
  children: <Typography>Loading Button</Typography>,
  variant: 'contained',
  color: 'primary',
  loading: true,
  loadingPosition: 'start',
  ariaLabel: 'Loading Button',
};

// Sizes
export const SmallButton: Story = Template.bind({});
SmallButton.args = {
  children: <Typography>Small Button</Typography>,
  variant: 'contained',
  color: 'primary',
  size: 'small',
  ariaLabel: 'Small Button',
};

export const LargeButton: Story = Template.bind({});
LargeButton.args = {
  children: <Typography>Large Button</Typography>,
  variant: 'contained',
  color: 'primary',
  size: 'large',
  ariaLabel: 'Large Button',
};

// Modifiers
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
