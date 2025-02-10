import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Stack, StackProps } from '../Stack/Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
  children: 'Stack',
  element: 'div',
};

export const Center: Story = Template.bind({});
Center.args = {
  children: 'Centered',
  element: 'div',
  xs: { justifyContent: 'center', alignItems: 'center' },
  customStyle: { height: '100vh' },
};

export const ResponsiveStack: Story = Template.bind({});
ResponsiveStack.args = {
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </>
  ),
  element: 'article',
  xs: { direction: 'column', spacing: 'xs' },
  md: { direction: 'row', spacing: 'md', alignItems: 'center', justifyContent: 'space-between' },
  lg: { spacing: 'lg', paddingX: 'md', paddingY: 'sm' },
};

export const CustomStyleStack: Story = Template.bind({});
CustomStyleStack.args = {
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </>
  ),
  element: 'section',
  xs: { direction: 'column', spacing: 'xs' },
  md: { direction: 'row', spacing: 'md', alignItems: 'center', justifyContent: 'space-between' },
  lg: { spacing: 'lg', paddingX: 'md', paddingY: 'sm' },
  customStyle: { backgroundColor: 'var(--connect__surface-mid)', color: 'white', width: '100%' },
};
