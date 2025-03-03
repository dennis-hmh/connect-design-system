import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Dropdown> = {
  title: 'Content/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Dropdown {...args} selectedValue={selectedValue} onChange={setSelectedValue} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: 'Select an option',
  data: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
    { label: 'Option 4' },
    { label: 'Option 5' },
    { label: 'Option 6' },
    { label: 'Option 7' },
  ],
  hint: '',
  disabled: false,
  fixedWidth: false,
  gradeBand: GradeBand.G4_5,
};

export const DropdownStates: Story = Template.bind({});
DropdownStates.args = {
  ...Default.args,
  children: 'Select an option',
  data: [
    { label: 'Option 1' },
    {
      label: 'Disabled Option 2',
      disabled: true,
    },
    {
      label: 'Disabled Selected',
      disabled: true,
    },
    { label: 'Option 4' },
    {
      label: 'Option 5 is going to be very long',
    },
    { label: 'Option 6' },
    { label: 'Option 7' },
  ],
  disabled: false,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const FixedWidth: Story = Template.bind({});
FixedWidth.args = {
  ...Default.args,
  fixedWidth: true,
  label: 'Fixed Width Dropdown',
};

export const Hint: Story = Template.bind({});
Hint.args = {
  ...Default.args,
  children: 'Select a name',
  data: [
    { label: 'Alice' },
    { label: 'Bob' },
    { label: 'Christopher' },
    { label: 'David' },
    { label: 'Eve' },
    { label: 'Fitzgerald' },
    { label: 'Grace' },
  ],
  hint: 'Choose a name',
};

export const OnClear: Story = Template.bind({});
OnClear.args = {
  ...Default.args,
  children: 'Select an option',
  data: [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
    { label: 'Option 4' },
    { label: 'Option 5' },
    { label: 'Option 6' },
    { label: 'Option 7' },
  ],
  onClear: () => {
    console.log('Clear the text');
  },
};
