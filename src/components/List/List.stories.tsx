import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { List, ListProps } from './List';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof List> = {
  title: 'Content/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof List>;

const Template: StoryFn<ListProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <List {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  data: [
    { content: 'List item this' },
    { content: 'List item that' },
    { content: 'List item other' },
  ],
  listType: 'unordered',
  variants: undefined,
  dataTestId: '',
  gradeBand: GradeBand.G4_5,
};

export const Unordered: Story = Template.bind({});
Unordered.args = {
  ...Default.args,
  listType: 'unordered',
  variants: 'circle',
};

export const Ordered: Story = Template.bind({});
Ordered.args = {
  ...Default.args,
  listType: 'ordered',
  variants: 'decimal',
};
