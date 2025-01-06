import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { GridItem, GridItemProps } from './GridItem';
import { Grid } from '../Grid/Grid';
import { Typography, TypographyProps } from '../Typography/Typography';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof GridItem> = {
  title: 'Layout/GridItem',
  component: GridItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GridItem>;

const Template: StoryFn<GridItemProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Grid>
          <GridItem {...args} />
        </Grid>
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: <Typography element="h1">GridItem</Typography>,
  sm: {
    startCol: 1,
    spanCol: 12,
  },
  lg: {
    startCol: 3,
    spanCol: 3,
  },
  gradeBand: GradeBand.G4_5,
};
