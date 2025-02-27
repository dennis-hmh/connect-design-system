import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Blockquote, BlockquoteProps } from './Blockquote';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Blockquote> = {
  title: 'Removed/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

const Template: StoryFn<BlockquoteProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand as GradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Blockquote {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: 'This is a blockquote',
  gradeBand: GradeBand.G4_5,
};
