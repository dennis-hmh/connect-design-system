import React, { useRef } from 'react';
import { ButtonSplit, ButtonSplitProps } from './ButtonSplit';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

import { Meta, StoryObj, StoryFn } from '@storybook/react';

const meta: Meta<typeof ButtonSplit> = {
  title: 'ButtonSplit',
  component: ButtonSplit,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonSplit>;

const Template: StoryFn<ButtonSplitProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <ButtonSplit {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Primary: Story = Template.bind({});
Primary.args = {
  children: 'Split Button',
  data: [
    { label: 'Dropdown item 1', value: 'Item 1' },
    { label: 'Dropdown item 2', value: 'Item 2' },
    { label: 'Dropdown item 3', value: 'Item 3' },
    { label: 'Dropdown item 4', value: 'Item 4' },
    { label: 'Dropdown item 5', value: 'Item 5' },
  ],
  disabled: false,
  gradeBand: GradeBand.G4_5,
};
