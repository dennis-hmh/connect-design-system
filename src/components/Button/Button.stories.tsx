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

// ... existing imports and meta ...

export const Primary: Story = Template.bind({});
Primary.args = {
  children: <Typography>Primary Button</Typography>,
  variant: 'contained',
  color: 'primary',
  disabled: false,
  correct: false,
  incorrect: false,
  submit: 'button',
  onClick: () => console.log('Button clicked'),
  ariaLabel: 'Primary Button',
  gradeBand: GradeBand.G4_5,
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  ...Primary.args,
  children: <Typography>Secondary Button</Typography>,
  color: 'secondary',
  ariaLabel: 'Secondary Button',
};

export const Small: Story = Template.bind({});
Small.args = {
  ...Primary.args,
  children: <Typography>Small Button</Typography>,
  size: 'small',
  ariaLabel: 'Small Button',
};

export const StartIcon: Story = Template.bind({});
StartIcon.args = {
  ...Primary.args,
  children: <Typography>Start Icon Button</Typography>,
  startIcon: 'arrowUp',
  iconSize: 'md',
  ariaLabel: 'Start Icon Button',
};

export const EndIcon: Story = Template.bind({});
EndIcon.args = {
  ...Primary.args,
  children: <Typography>End Icon Button</Typography>,
  endIcon: 'arrowUp',
  iconSize: 'md',
  ariaLabel: 'End Icon Button',
};

export const TextVariant: Story = Template.bind({});
TextVariant.args = {
  ...Primary.args,
  children: <Typography>Text Button</Typography>,
  variant: 'text',
  ariaLabel: 'Text Button',
};

export const OutlinedVariant: Story = Template.bind({});
OutlinedVariant.args = {
  ...Primary.args,
  children: <Typography>Outlined Button</Typography>,
  variant: 'outlined',
  ariaLabel: 'Outlined Button',
};

export const Success: Story = Template.bind({});
Success.args = {
  ...Primary.args,
  children: <Typography>Success Button</Typography>,
  color: 'success',
  ariaLabel: 'Success Button',
};

export const Error: Story = Template.bind({});
Error.args = {
  ...Primary.args,
  children: <Typography>Error Button</Typography>,
  color: 'error',
  ariaLabel: 'Error Button',
};

export const Icon: Story = Template.bind({});
Icon.args = {
  ...Primary.args,
  children: null,
  iconId: 'arrowUp',
  iconSize: 'md',
  ariaLabel: 'Icon Button Up Arrow',
};

export const Correct: Story = Template.bind({});
Correct.args = {
  ...Primary.args,
  children: <Typography>Correct Button</Typography>,
  correct: true,
  ariaLabel: 'Correct Button',
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
