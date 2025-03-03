import React, { useRef, useEffect, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { InputBox, InputBoxProps } from './InputBox';
import { Image } from '../index.ts';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof InputBox> = {
  component: InputBox,
  title: 'Input/Input Box',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof InputBox>;

const Template: StoryFn<InputBoxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    args.onChange(event);
  };

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <InputBox {...args} checked={checked} onChange={handleChange} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
export const MCQImage: Story = Template.bind({});
export const Checked: Story = Template.bind({});
export const Correct: Story = Template.bind({});
export const Incorrect: Story = Template.bind({});
export const AnswerShown: Story = Template.bind({});
export const Disabled: Story = Template.bind({});

Default.args = {
  type: 'checkbox',
  id: 'answer',
  name: 'input',
  checked: false,
  correct: false,
  incorrect: false,
  answerShown: false,
  disabled: false,
  children: 'The mouse rides a bike',
  gradeBand: GradeBand.G4_5,
};

MCQImage.args = {
  ...Default.args,
  classes: 'connect__mcq-card',
  children: <Image imageSrc="" altText={'This is Alt Text'} />,
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
