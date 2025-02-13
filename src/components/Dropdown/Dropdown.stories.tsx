import React, { useRef, useState } from 'react';
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
  gradeBand: GradeBand.G4_5,
};

export const DropdownStates: Story = Template.bind({});
DropdownStates.args = {
  ...Default.args,
  children: 'Select an option',
  data: [
    { label: 'Option 1', className: null, ariaSelected: false },
    {
      label: 'Disabled Option 2',
      className: null,
      ariaSelected: false,
      disabled: true,
    },
    {
      label: 'Disabled Selected',
      className: 'connect__selected',
      ariaSelected: true,
      disabled: true,
    },
    { label: 'Option 4', className: null, ariaSelected: false },
    {
      label: 'Option 5 is going to be very long',
      className: null,
      ariaSelected: false,
    },
    { label: 'Option 6', className: null, ariaSelected: false },
    { label: 'Option 7', className: null, ariaSelected: false },
  ],
  disabled: false,
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
