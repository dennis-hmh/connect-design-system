import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Input/Checkbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Checkbox {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  id: 'checkbox',
  name: 'input',
  checked: false,
  disabled: false,
  children: 'The mouse rides a bike',
  gradeBand: GradeBand.Teach,
};

export const Checked: Story = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
