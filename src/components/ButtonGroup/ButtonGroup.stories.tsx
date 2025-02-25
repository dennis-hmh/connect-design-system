import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { Button } from '../Button/Button';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Buttons/Button Group',
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

export const Default: Story = Template.bind({});
Default.args = {
  children: [<Button>Option 1</Button>, <Button>Option 2</Button>],
  primary: true,
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

export const ThreeButtons: Story = Template.bind({});
ThreeButtons.args = {
  ...Default.args,
  children: [<Button>Option 1</Button>, <Button>Option 2</Button>, <Button>Option 3</Button>],
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  ...Default.args,
  children: [<Button primary={false}>Option 1</Button>, <Button primary={false}>Option 2</Button>],
  primary: false,
};

export const SecondaryThreeButtons: Story = Template.bind({});
SecondaryThreeButtons.args = {
  ...Secondary.args,
  children: [
    <Button primary={false}>Option 1</Button>,
    <Button primary={false}>Option 2</Button>,
    <Button primary={false}>Option 3</Button>,
  ],
};

export const Tools: Story = Template.bind({});
Tools.args = {
  ...Default.args,
  children: [<ButtonMenu iconId="undo"></ButtonMenu>, <ButtonMenu iconId="redo"></ButtonMenu>],
  classes: 'connect__button-group-tools',
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Default.args,
  primary: false,
  children: [<Button disabled={true}>Option 1</Button>, <Button disabled={true}>Option 2</Button>],
  disabled: true,
};
