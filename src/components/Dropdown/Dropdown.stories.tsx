import React, { useRef, useState, useEffect } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Dropdown> = {
  title: 'Misc/Dropdown',
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
  const [open, setOpen] = useState(false);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Dropdown
          {...args}
          selectedValue={selectedValue}
          onChange={setSelectedValue}
          open={open}
          onToggle={setOpen}
        />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: 'Select an option',
  data: [
    { label: 'Option 1', value: 'Default' },
    { label: 'Option 2', value: 'Default' },
    { label: 'Option 3', value: 'Default' },
    { label: 'Option 4', value: 'Default' },
    { label: 'Option 5', value: 'Default' },
    { label: 'Option 6', value: 'Default' },
    { label: 'Option 7', value: 'Default' },
  ],
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

export const DropdownStates: Story = Template.bind({});
DropdownStates.args = {
  children: 'Select an option',
  data: [
    { label: 'Option 1', className: null, ariaSelected: false, value: 'Default' },
    {
      label: 'Disabled Option 2',
      className: null,
      ariaSelected: false,
      value: 'Disabled',
      disabled: true,
    },
    {
      label: 'Disabled Selected',
      className: 'connect__selected',
      ariaSelected: true,
      value: 'Disabled Selected',
      disabled: true,
    },
    { label: 'Option 4', className: null, ariaSelected: false, value: 'Default' },
    {
      label: 'Option 5 is going to be very long',
      className: null,
      ariaSelected: false,
      value: 'Default',
    },
    { label: 'Option 6', className: null, ariaSelected: false, value: 'Default' },
    { label: 'Option 7', className: null, ariaSelected: false, value: 'Default' },
  ],
  disabled: false,
  gradeBand: GradeBand.G4_5,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Hint: Story = Template.bind({});
Hint.args = {
  ...Default.args,
  children: 'Select a name',
  data: [
    { label: 'Alice', value: 'alice' },
    { label: 'Bob', value: 'bob' },
    { label: 'Christopher', value: 'christopher' },
    { label: 'David', value: 'david' },
    { label: 'Eve', value: 'eve' },
    { label: 'Fitzgerald', value: 'fitzgerald' },
    { label: 'Grace', value: 'grace' },
  ],
  hint: 'Choose a name',
};

export const OnClear: Story = Template.bind({});
OnClear.args = {
  ...Default.args,
  children: 'Select an option',
  data: [
    { label: 'Option 1', value: 'Default' },
    { label: 'Option 2', value: 'Default' },
    { label: 'Option 3', value: 'Default' },
    { label: 'Option 4', value: 'Default' },
    { label: 'Option 5', value: 'Default' },
    { label: 'Option 6', value: 'Default' },
    { label: 'Option 7', value: 'Default' },
  ],
  onClear: () => {
    console.log('Clearing of the text');
  },
};
