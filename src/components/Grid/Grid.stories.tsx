import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Grid, GridProps } from './Grid';
import { GridItem } from '../GridItem/GridItem';
import { Typography, TypograhyProps } from '../Typography/Typography';
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
      <GridItem sm={{ startCol: 1, spanCol: 4 }}>
        <Typography element="div">Item 1</Typography>
      </GridItem>
      <GridItem sm={{ startCol: 5, spanCol: 4 }}>
        <Typography element="div">Item 2</Typography>
      </GridItem>
      <GridItem sm={{ startCol: 9, spanCol: 4 }}>
        <Typography element="div">Item 3</Typography>
      </GridItem>
    </>
  ),
  gap: 'sm',
  gutter: true,
  gradeBand: GradeBand.G4_5,
};
