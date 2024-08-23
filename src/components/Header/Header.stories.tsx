import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Header, HeaderProps } from './Header';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

import Stack from '../Stack/Stack';
import { Typography } from '../Typography/Typography';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const Template: StoryFn<HeaderProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Header {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: <Typography children="Header" element="h1" />,
  className: 'connect__grid',
  gradeBand: GradeBand.G4_5,
};

export const SubHeader: Story = Template.bind({});
SubHeader.args = {
  ...Default.args,
  children: (
    <Stack>
      <Typography children="Header" element="h1" />
      <Typography children="SubHeader" element="h2" />
    </Stack>
  ),
};
