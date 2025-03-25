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
  argTypes: {
    primary: { table: { disable: true } },
    correct: { table: { disable: true } },
    incorrect: { table: { disable: true } },
    submit: { table: { disable: true } },
    clickHandler: { table: { disable: true } },
    iconId: { table: { disable: true } },
    iconSize: { table: { disable: true } },
    fill: { table: { disable: true } },
    iconPosition: { table: { disable: true } },
    iconOpacity: { table: { disable: true } },
    additionalClasses: { table: { disable: true } },
    mediaButton: { table: { disable: true } },
    //are the following needed at all
    tabIndex: { table: { disable: true } },
    onFocusVisible: { table: { disable: true } },
    onKeyDown: { table: { disable: true } },
    onKeyUp: { table: { disable: true } },
    onMouseDown: { table: { disable: true } },
    onMouseLeave: { table: { disable: true } },
    classes: { table: { disable: true } },
    ariaLabel: { table: { disable: true } },
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

export const VisitedButton: Story = Template.bind({});
VisitedButton.args = {
  children: <Typography>Visited Button</Typography>,
  color: 'primary',
  state: 'visited',
  ariaLabel: 'Visited Button',
};

export const ActivatedButton: Story = Template.bind({});
ActivatedButton.args = {
  children: <Typography>Activated Button</Typography>,
  color: 'primary',
  state: 'activated',
  ariaLabel: 'Activated Button',
};

export const PlainButton: Story = Template.bind({});
PlainButton.args = {
  children: <Typography>Plain Button</Typography>,
  variant: 'plain',
  color: 'primary',
  ariaLabel: 'Plain Button',
};

export const StartIconButton: Story = Template.bind({});
StartIconButton.args = {
  children: (
    <>
      <Icon id="arrowUp" size="sm" />
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
      <Icon id="arrowUp" size="sm" />
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
      <Icon id="arrowUp" size="sm" />
      <Typography>Start and End Icon Button</Typography>
      <Icon id="arrowDown" size="sm" />
    </>
  ),
  variant: 'contained',
  color: 'primary',
  ariaLabel: 'Start and End Icon Button',
};

export const IconOnlyButton: Story = Template.bind({});
IconOnlyButton.args = {
  children: <Icon id="arrowUp" size="sm" />,
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
      <Icon id="loader" size="sm" />
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

export const MediumButton: Story = Template.bind({});
MediumButton.args = {
  children: <Typography>Medium Button</Typography>,
  variant: 'contained',
  color: 'primary',
  size: 'md',
  ariaLabel: 'Medium Button',
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
