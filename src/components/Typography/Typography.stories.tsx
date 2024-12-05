import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Typography, TypographyProps } from './Typography';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Typography> = {
  title: 'Content/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

const Template: StoryFn<TypographyProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Typography {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});

Default.args = {
  children: 'Typography',
  id: 'typography',
  element: 'h1',
  color: undefined,
  family: 'sans',
  size: 'heading-lg',
  spacer: false,
  spacerSize: undefined,
  style: 'normal',
  weight: undefined,
  letterSpacing: undefined,
  textAlign: undefined,
  textTransform: undefined,
  textWrap: undefined,
  className: undefined,
  gradeBand: GradeBand.G4_5,
};
