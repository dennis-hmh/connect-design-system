import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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

export const Primary: Story = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  primary: true,
  disabled: false,
  correct: false,
  incorrect: false,
  submit: 'button',
  clickHandler: () => console.log('Button clicked'),
  ariaLabel: 'Primary Button',
  gradeBand: GradeBand.G4_5,
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  ...Primary.args,
  children: 'Secondary Button',
  primary: false,
  ariaLabel: 'Secondary Button',
};

export const Correct: Story = Template.bind({});
Correct.args = {
  ...Primary.args,
  children: 'Correct Button',
  correct: true,
  iconId: 'correct',
  iconSize: 'md',
  iconPosition: 'after',
  ariaLabel: 'Correct Button',
};

export const Icon: Story = Template.bind({});
Icon.args = {
  ...Primary.args,
  children: '',
  fill: 'white',
  iconId: 'arrow-right',
  iconSize: 'md',
  ariaLabel: 'Icon Button Right Arrow',
};

export const Loading: Story = Template.bind({});
Loading.args = {
  ...Primary.args,
  children: 'Loading Button',
  fill: 'white',
  iconId: 'loader',
  iconSize: 'md',
  iconPosition: 'before',
  ariaLabel: 'Loading Button',
  additionalClass: 'connect__button-loading',
};
