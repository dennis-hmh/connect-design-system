import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Stack, StackProps, BreakpointValues } from '../Stack/Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'Direction of the stack',
    },
    spacing: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'zero'],
      description: 'Spacing between elements',
    },
    alignItems: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'Alignment of items along the cross axis',
    },
    justifyContent: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
      description: 'Alignment of items along the main axis',
    },
    flexWrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Wrapping behavior of the flex container',
    },
    paddingX: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'zero'],
      description: 'Horizontal padding',
    },
    paddingY: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'zero'],
      description: 'Vertical padding',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Template: StoryFn<StackProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Stack {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  xs: {
    direction: 'column',
    spacing: 'sm',
    alignItems: 'center',
    justifyContent: 'start',
    flexWrap: 'wrap',
    paddingX: 'xs',
    paddingY: 'xs',
  },
  sm: {
    direction: 'column',
    spacing: 'sm',
    alignItems: 'start',
    justifyContent: 'start',
    flexWrap: 'wrap',
    paddingX: 'sm',
    paddingY: 'sm',
  },
  md: {
    direction: 'column',
    spacing: 'md',
    alignItems: 'start',
    justifyContent: 'start',
    flexWrap: 'wrap',
    paddingX: 'md',
    paddingY: 'md',
  },
  lg: {
    direction: 'column',
    spacing: 'lg',
    alignItems: 'start',
    justifyContent: 'start',
    flexWrap: 'wrap',
    paddingX: 'lg',
    paddingY: 'lg',
  },
  xl: {
    direction: 'column',
    spacing: 'xl',
    alignItems: 'stretch',
    justifyContent: 'start',
    flexWrap: 'wrap',
    paddingX: 'xl',
    paddingY: 'xl',
  },
  children: 'Stack',
};
