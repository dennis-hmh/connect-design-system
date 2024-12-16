import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Card, CardProps } from './Card';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Card> = {
  title: 'Layout/New Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const Template: StoryFn<CardProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Card {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  header: (
    <>
      <Stack xs={{ direction: 'row', spacing: 'sm', paddingX: 'sm', paddingY: 'sm' }}>
        <Typography element="h4" size="heading-lg">
          Header
        </Typography>
      </Stack>
      <Paper elevation={0} fullWidth={true} backgroundColor="gray-c10">
        <Stack xs={{ direction: 'row', spacing: 'sm', paddingX: 'sm', paddingY: 'sm' }}>
          <Typography element="h5" size="heading-sm">
            Subheader
          </Typography>
        </Stack>
      </Paper>
    </>
  ),
  children: 'Card',
  footer: (
    <>
      <Button primary={false}>Secondary</Button>
      <Button primary={true}>Primary</Button>
    </>
  ),
  gradeBand: GradeBand.G4_5,
};
