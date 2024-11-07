import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { RiveSimple, RiveSimpleProps } from './RiveSimple';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBandContext } from '../../context/GradeBandContext';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof RiveSimple> = {
  title: 'Animation/Rive Grade Banded',
  component: RiveSimple,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RiveSimple>;

const Template: StoryFn<RiveSimpleProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <GradeBandContext.Provider value={args.gradeBand}>
      <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
        <div ref={themeWrapperRef}>
          <RiveSimple {...args} />
        </div>
      </ConnectTheme>
    </GradeBandContext.Provider>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  gradeBand: GradeBand.G4_5,
  srcDefault: 'https://chrisrooke-hmh.github.io/core-public/animations/boy.riv',
  descDefault: 'hi',
  src23: 'https://chrisrooke-hmh.github.io/core-public/animations/dino.riv',
  desc23: 'Grade 2-3',
  src45: 'https://chrisrooke-hmh.github.io/core-public/animations/cat.riv',
  desc45: 'Grade 4-5',
  src68: 'https://chrisrooke-hmh.github.io/core-public/animations/viking.riv',
  desc68: 'Grade 6-8',
  src912: 'https://chrisrooke-hmh.github.io/core-public/animations/watch.riv',
  desc912: 'Grade 9-12',
  hidePlayPause: true,
  autoplay: true,
  'play-state': 'playing',
  stateMachine: 'StateMachine1',
  contain: true,
  height: true,
};
