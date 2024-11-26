import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Grid, GridProps } from './Grid';
import { GridItem, GridItemProps } from '../GridItem';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const Template: StoryFn<GridProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: '',
  gap: 'sm',
  gutter: false,
  gradeBand: GradeBand.G4_5,
};

export const WithGridItems: Story = Template.bind({});
WithGridItems.args = {
  children: (
    <>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
    </>
  ),
  gap: 'sm',
  gutter: false,
  gradeBand: GradeBand.G4_5,
};
