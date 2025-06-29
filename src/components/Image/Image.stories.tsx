import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Image, ImageProps } from './Image';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Image> = {
  title: 'Content/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

const Template: StoryFn<ImageProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Image {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  imageSrc: '/images/default.png',
  altText: 'This is Alt Text',
  roundedCorners: false,
  className: '',
  contain: false,
  gradeBand: GradeBand.G4_5,
};

export const WithRoundedCorners: Story = Template.bind({});
WithRoundedCorners.args = {
  ...Default.args,
  roundedCorners: true,
};

export const WithContain: Story = Template.bind({});
WithContain.args = {
  ...Default.args,
  contain: true,
};
