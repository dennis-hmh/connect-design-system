import React, { useRef, CSSProperties } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Header, HeaderProps } from './Header';
import GridItem from '../GridItem';
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

  const sourceBodyStyles = {
    '--theme__connect-grid-width': 'auto',
    '--theme__connect-header-breakout-bg': 'var(--connect__gray-c5)',
    overflow: 'auto',
    minHeight: 'calc(100vh -(var(--base-lheight)* 4))',
    position: 'relative',
    padding: '0 var(--gutter-width) calc(var(--base-lheight)* 4)',
    color: '#2d2d2d',
    WebkitFontSmoothing: 'antialiased',
    counterReset: 'paras',
    margin: '0',
  };

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef} style={sourceBodyStyles as React.CSSProperties}>
        <Header {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: (
    <GridItem>
      <Typography children="Header" element="h1" />
    </GridItem>
  ),
  className: 'connect__grid',
  gradeBand: GradeBand.G4_5,
};

export const SubHeader: Story = Template.bind({});
SubHeader.args = {
  ...Default.args,
  children: (
    <GridItem>
      <Typography children="Header" element="h1" />
      <Typography children="SubHeader" element="h2" />
    </GridItem>
  ),
};
