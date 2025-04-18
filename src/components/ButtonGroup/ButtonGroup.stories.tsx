import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { Icon } from '../Icon/Icon';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'WIP/Button Group',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

const Template: StoryFn<ButtonGroupProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <ButtonGroup {...args} />
      </div>
    </ConnectTheme>
  );
};

export const PrimaryContained: Story = Template.bind({});
PrimaryContained.args = {
  children: [<Button>Option 1</Button>, <Button>Option 2</Button>],
  variant: 'contained',
  color: 'primary',
  ariaLabel: 'Primary Button Group',
  orientation: 'horizontal',
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

export const VerticalContained: Story = Template.bind({});
VerticalContained.args = {
  ...PrimaryContained.args,
  orientation: 'vertical',
};

export const SecondaryOutlined: Story = Template.bind({});
SecondaryOutlined.args = {
  ...PrimaryContained.args,
  children: [<Button>Option 1</Button>, <Button>Option 2</Button>],
  variant: 'outlined',
  color: 'secondary',
  ariaLabel: 'Secondary Button Group',
};

export const ThreeButtonsContained: Story = Template.bind({});
ThreeButtonsContained.args = {
  ...PrimaryContained.args,
  children: [<Button>Option 1</Button>, <Button>Option 2</Button>, <Button>Option 3</Button>],
};

export const VerticalThreeButtonsContained: Story = Template.bind({});
VerticalThreeButtonsContained.args = {
  ...ThreeButtonsContained.args,
  orientation: 'vertical',
};

export const ThreeButtonsOutlined: Story = Template.bind({});
ThreeButtonsOutlined.args = {
  ...SecondaryOutlined.args,
  children: [<Button>Option 1</Button>, <Button>Option 2</Button>, <Button>Option 3</Button>],
};

export const DisableElevation: Story = Template.bind({});
DisableElevation.args = {
  ...PrimaryContained.args,
  disableElevation: true,
};

export const Icons: Story = Template.bind({});
Icons.args = {
  ...PrimaryContained.args,
  children: [
    <>
      <IconButton variant="text" ariaLabel="Undo">
        <Icon id="undo" size="sm" />
      </IconButton>
      <IconButton variant="text" ariaLabel="Redo">
        <Icon id="redo" size="sm" />
      </IconButton>
    </>,
  ],
  ariaLabel: 'Icon Button Group',
  variant: 'plain',
  color: 'primary',
  disableElevation: false,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...PrimaryContained.args,
  children: [<Button>Option 1</Button>, <Button>Option 2</Button>],
  disabled: true,
};
