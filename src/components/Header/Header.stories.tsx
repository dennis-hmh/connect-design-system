import React, { useRef, CSSProperties } from 'react';
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
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const Template: StoryFn<HeaderProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  const bodyStyles: CSSProperties = {
    color: '#2d2d2d',
    counterReset: 'paras',
    WebkitFontSmoothing: 'antialiased',
    height: '100vh',
    margin: 0,
    overflow: 'auto',
    paddingTop: '0',
    paddingBottom: '0',
    paddingRight: 'var(--gutter-width)',
    paddingLeft: 'var(--gutter-width)',
    position: 'relative',
  };

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef} style={bodyStyles}>
        <Header {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  className: 'connect__grid',
  gradeBand: GradeBand.G4_5,
  children: 'New Header',
  element: 'h1',
  size: 'heading-xl',
  color: 'golden-m50',
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
