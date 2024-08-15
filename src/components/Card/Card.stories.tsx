import React, { useRef } from 'react';
import { Card, CardProps } from './Card';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

import { Meta, StoryObj, StoryFn } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const Template: StoryFn<CardProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Card {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  image: true,
  imageSrc: '',
  imageAlt: 'Zelda',
  imageCaption: 'Zelda caption',
  headerElement: 'h2',
  headerContent: 'Header component text',
  mainContent: 'This is the main commponent text',
  footerContent: 'Footer component text',
  gradeBand: GradeBand.G4_5,
};

export const WithoutImage: Story = Template.bind({});
WithoutImage.args = {
  ...Default.args,
  image: false,
};
