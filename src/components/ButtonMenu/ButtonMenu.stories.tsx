import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ButtonMenu, ButtonMenuProps } from './ButtonMenu';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';

const meta: Meta<typeof ButtonMenu> = {
  title: 'Buttons/Button Menu',
  component: ButtonMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <ButtonMenuProvider>
          <Story />
        </ButtonMenuProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ButtonMenu>;

const Template: StoryFn<ButtonMenuProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <ButtonMenu {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: '',
  id: 'add',
  backgroundColor: undefined,
  iconId: 'add',
  iconSize: 'sm',
  variant: undefined,
  additionalClass: '',
  clickedClass: 'connect__selected',
  ariaLabel: 'Add Menu Button',
  gradeBand: GradeBand.G4_5,
};

export const Plain: Story = Template.bind({});
Plain.args = {
  children: '',
  id: 'replay',
  iconId: 'replay',
  variant: 'plain',
  iconSize: 'sm',
  ariaLabel: 'Plain reload button',
  gradeBand: GradeBand.G4_5,
};

export const Rounded: Story = Template.bind({});
Rounded.args = {
  children: '',
  id: 'replay',
  iconId: 'replay',
  variant: 'plain',
  rounded: true,
  iconSize: 'sm',
  ariaLabel: 'Plain reload rounded button',
  gradeBand: GradeBand.G4_5,
};

export const withBackgroundColors: Story = Template.bind({});
withBackgroundColors.args = {
  ...Default.args,
  backgroundColor: 'gray-c5',
};
