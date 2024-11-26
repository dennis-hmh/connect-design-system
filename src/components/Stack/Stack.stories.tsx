import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Stack, StackProps, BreakpointValues } from './Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

const Template: StoryFn<StackProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Stack {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: '',
  direction: 'row',
  spacing: 'sm',
  alignItems: 'stretch',
  justifyContent: 'start',
  flexWrap: 'wrap',
  paddingX: 'sm',
  paddingY: 'sm',
  gradeBand: GradeBand.G4_5,
};

export const WithStackCol: Story = Template.bind({});
WithStackCol.args = {
  ...Default.args,
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </>
  ),
};

export const WithStackRow: Story = Template.bind({});
WithStackRow.args = {
  ...Default.args,
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </>
  ),
  direction: 'row',
};
