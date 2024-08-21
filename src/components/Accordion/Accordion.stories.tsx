import React, { useRef } from 'react';
import { Accordion, AccordionProps } from './Accordion';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

import { Meta, StoryObj, StoryFn } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const Template: StoryFn<AccordionProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Accordion {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  data: [
    {
      title: 'Title One',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
    {
      title: 'Title Two',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
    {
      title: 'Title Three',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
    {
      title: 'Title Four',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
    {
      title: 'Title Five',
      content:
        'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    },
  ],
  variants: 'default',
  gradeBand: GradeBand.G4_5,
};

export const Divider: Story = Template.bind({});

Divider.args = {
  ...Default.args,
  variants: 'divider',
};

// Color.args = {
//   ...Default.args,
//   variants: 'color',
// };
