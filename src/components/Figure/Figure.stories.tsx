import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Figure, FigureProps } from './Figure';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Figure> = {
  component: Figure,
  title: 'Figure',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Figure>;

const Template: StoryFn<FigureProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Figure {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  altText: 'This is Alt Text',
  imageSrc: '',
  imageCaption: 'This is an image caption',
  gradeBand: GradeBand.G4_5,
};

export const WithoutCaption: Story = Template.bind({});
WithoutCaption.args = {
  ...Default.args,
  imageCaption: '',
};
