import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Paper, PaperProps } from './Paper';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Paper> = {
  component: Paper,
  title: 'Layout/Paper',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

const Template: StoryFn<PaperProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Paper {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});

Default.args = {
  children: 'Paper',
  element: 'div',
  elevation: 0,
  roundedCorner: true,
  className: '',
  dataTestId: '',
  gradeBand: GradeBand.G4_5,
};
