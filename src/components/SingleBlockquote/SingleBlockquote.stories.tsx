import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { SingleBlockquote, SingleBlockquoteProps } from './SingleBlockquote';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof SingleBlockquote> = {
  component: SingleBlockquote,
  title: 'SingleBlockquote',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SingleBlockquote>;

const Template: StoryFn<SingleBlockquoteProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <SingleBlockquote {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: 'Single Blockquote',
  caption: 'Caption',
  cite: 'Citation',
  gradeBand: GradeBand.G4_5,
};
