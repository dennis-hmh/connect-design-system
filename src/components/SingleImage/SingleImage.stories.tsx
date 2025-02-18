import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { SingleImage, SingleImageProps } from './SingleImage';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof SingleImage> = {
  title: 'Figure/Single Image',
  component: SingleImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SingleImage>;

const Template: StoryFn<SingleImageProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <SingleImage {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  imageSrc: '/images/default.jpg',
  altText: 'A picture of a gradient pattern',
  caption: 'A picture of a gradient pattern',
  cite: 'https://unsplash.com/',
  gradeBand: GradeBand.G4_5,
};
