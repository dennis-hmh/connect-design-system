import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { Button } from '../Button/Button';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';

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
  type: 'button',
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

export const Icon: Story = Template.bind({});
Icon.args = {
  ...PrimaryContained.args,
  children: [<ButtonMenu iconId="undo"></ButtonMenu>, <ButtonMenu iconId="redo"></ButtonMenu>],
  ariaLabel: 'Icon Button Group',
  color: 'white',
  disableElevation: false,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...PrimaryContained.args,
  disabled: true,
  children: [<Button>Option 1</Button>, <Button>Option 2</Button>],
  disabled: true,
};
