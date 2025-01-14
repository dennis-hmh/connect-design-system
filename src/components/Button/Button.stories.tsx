import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';
import { Typography } from '../Typography/Typography';
import { RiveEngine } from '../RiveEngine/RiveEngine';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template: StoryFn<ButtonProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Button {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Primary: Story = Template.bind({});
Primary.args = {
  children: <Typography>Primary Button</Typography>,
  primary: true,
  disabled: false,
  correct: false,
  incorrect: false,
  submit: 'button',
  clickHandler: () => console.log('Button clicked'),
  ariaLabel: 'Primary Button',
  gradeBand: GradeBand.G4_5,
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  ...Primary.args,
  children: <Typography>Secondary Button</Typography>,
  primary: false,
  ariaLabel: 'Secondary Button',
};

export const Correct: Story = Template.bind({});
Correct.args = {
  ...Primary.args,
  children: <Typography>Correct Button</Typography>,
  correct: true,
  ariaLabel: 'Correct Button',
};

export const Icon: Story = Template.bind({});
Icon.args = {
  ...Primary.args,
  children: '',
  iconId: 'arrowUp',
  iconSize: 'md',
  ariaLabel: 'Icon Button Right Arrow',
};

export const Loading: Story = Template.bind({});
Loading.args = {
  ...Primary.args,
  children: <Typography>Loading Button</Typography>,
  fill: 'white',
  iconId: 'loader',
  iconSize: 'md',
  iconPosition: 'before',
  ariaLabel: 'Loading Button',
  additionalClass: 'connect__button-loading',
};

// Rive Button Stories broken, thus commented out
// export const RiveLoading: Story = Template.bind({});
// RiveLoading.args = {
//   children: (
//     <>
//       <Typography>Loading</Typography>
//       <RiveEngine
//         src="https://chrisrooke-hmh.github.io/core-public/ai-button/ai_button_playstate.riv"
//         sizeByHeight
//         style={{ opacity: 0 }}
//       />
//     </>
//   ),
//   primary: true,
//   disabled: true,
//   iconId: 'loader',
//   iconPosition: 'before',
//   ariaLabel: 'Rive Button Loading',
//   gradeBand: GradeBand.G4_5,
// };

// export const RiveGenerating: Story = Template.bind({});
// RiveGenerating.args = {
//   children: (
//     <>
//       <Typography styles={{ opacity: 0 }}>Generating</Typography>
//       <RiveEngine
//         src="https://chrisrooke-hmh.github.io/core-public/ai-button/ai_button_playstate.riv"
//         sizeByHeight
//       />
//     </>
//   ),
//   primary: true,
//   ariaLabel: 'Rive Button Generating',
//   gradeBand: GradeBand.G4_5,
// };
