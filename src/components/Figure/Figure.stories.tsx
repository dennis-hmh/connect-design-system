import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Figure, FigureProps } from './Figure';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

import { Image } from '../Image/Image';
import { Blockquote } from '../Blockquote/Blockquote';

const meta: Meta<typeof Figure> = {
  component: Figure,
  title: 'Figure/Figure',
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
  children: <Image imageSrc={'../../images/zelda.jpg'} altText={'This is Alt Text'} />,
  caption: 'This is a caption',
  cite: '',
  gradeBand: GradeBand.G4_5,
};

export const WithCitation: Story = Template.bind({});
WithCitation.args = {
  ...Default.args,
  cite: '- My citation',
};

export const WithoutCaption: Story = Template.bind({});
WithoutCaption.args = {
  ...Default.args,
  caption: '',
};

export const ShortBlockquote: Story = Template.bind({});
ShortBlockquote.args = {
  ...Default.args,
  children: <Blockquote children={'This is short a blockquote'} />,
};

export const LongBlockquote: Story = Template.bind({});
LongBlockquote.args = {
  ...Default.args,
  caption: '',
  children: (
    <Blockquote
      children={
        'The blockquote element in HTML is used to represent a section that is quoted from another source. It is typically rendered with indentation to distinguish it from the surrounding text. In the context of React components, the blockquote element can be conditionally rendered based on props, allowing for dynamic content display. For instance, in a storybook setup, you might have different stories that showcase how the blockquote element appears with various lengths of text. This helps in testing the styling and behavior of the blockquote element under different scenarios, ensuring that it maintains readability and visual appeal regardless of the content it contains.'
      }
    />
  ),
  cite: 'My citation',
};
