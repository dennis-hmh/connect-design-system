import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Chip, ChipProps } from './Chip';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Chip> = {
  title: 'Misc/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

const Template: StoryFn<ChipProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Chip {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Number: Story = Template.bind({});
Number.args = {
  children: 'Chip Text',
  num: 10,
  totalNum: '',
  gradeBand: GradeBand.G4_5,
};

export const TotalNumber: Story = Template.bind({});
TotalNumber.args = {
  ...Number.args,
  totalNum: 11,
};
