import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { SingleImage, SingleImageProps } from './SingleImage';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof SingleImage> = {
  title: 'Single Image',
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
  
  export const Primary: Story = Template.bind({});
  Primary.args = {
    imageSrc: 'https://picsum.photos/600/400',
    altText: 'A random picture from Lorem Picsum',
    caption: 'A random picture chosen by Lorem Picsum',
    cite: 'https://picsum.photos/',
    gradeBand: GradeBand.G4_5,
  };
