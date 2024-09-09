import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import {
  MultipleChoiceQuestionImage,
  MultipleChoiceQuestionImageProp,
} from './MultipleChoiceQuestionImage';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

import { Image } from '../Image/Image';

const meta: Meta<typeof MultipleChoiceQuestionImage> = {
  component: MultipleChoiceQuestionImage,
  title: 'MultipleChoiceQuestionImage',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MultipleChoiceQuestionImage>;

const Template: StoryFn<MultipleChoiceQuestionImageProp> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <MultipleChoiceQuestionImage {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const Checked: Story = Template.bind({});
export const Correct: Story = Template.bind({});
export const Incorrect: Story = Template.bind({});
export const AnswerShown: Story = Template.bind({});
export const Disabled: Story = Template.bind({});

Default.args = {
  type: 'checkbox',
  image: true,
  children: <Image imageSrc="" altText="The mouse rides a bike" />,
  id: 'answer',
  name: 'mcq',
  checked: false,
  disabled: false,
  correct: false,
  incorrect: false,
  gradeBand: GradeBand.G4_5,
};

Checked.args = {
  ...Default.args,
  checked: true,
};

Correct.args = {
  ...Default.args,
  checked: true,
  correct: true,
};

Incorrect.args = {
  ...Default.args,
  checked: true,
  incorrect: true,
};

AnswerShown.args = {
  ...Default.args,
  checked: true,
  answerShown: true,
};

Disabled.args = {
  ...Default.args,
  disabled: true,
};
