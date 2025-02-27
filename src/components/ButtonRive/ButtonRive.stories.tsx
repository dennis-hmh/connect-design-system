import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ButtonRive, ButtonRiveProps } from './ButtonRive';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof ButtonRive> = {
  title: 'Archive/Button Rive',
  component: ButtonRive,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonRive>;

const Template: StoryFn<ButtonRiveProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <ButtonRive {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Primary: Story = Template.bind({});
Primary.args = {
  primary: true,
  iconId: 'loader',
  additionalClass: 'connect__button--rive connect__button-loading',
  textTransform: 'none',
  buttonText: 'Button Text',
  animSrc: 'https://chrisrooke-hmh.github.io/core-public/ai-button/ai_button_playstate.riv',
  stateMachine: 'State Machine 1',
  gradeBand: GradeBand.G4_5,
};
