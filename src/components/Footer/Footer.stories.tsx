import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Footer, FooterProps } from './Footer';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Archive/Footer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const Template: StoryFn<FooterProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  const sourceBodyStyles = {
    '--theme__connect-grid-width': 'auto',
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
        <Footer {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: '',
  footerBreakoutColor: 'green-s50',
  footerPosition: 'relative',
  gradeBand: GradeBand.G4_5,
};
