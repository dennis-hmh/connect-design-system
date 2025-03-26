import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { ButtonMenu, ButtonMenuProps } from './ButtonMenu';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof ButtonMenu> = {
  title: 'Buttons/Button Menu',
  component: ButtonMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Warning:** This component will soon be archived and no longer available. Please use the \`<IconButton />\` component instead.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonMenu>;

const Template: StoryFn<ButtonMenuProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const clickedClass = clicked ? args.clickedClass : '';

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <ButtonMenu {...args} onClick={handleClick} additionalClass={clickedClass} />
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
  fill: 'white',
  variant: undefined,
  additionalClass: '',
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
  fill: 'primary-mid',
  rounded: true,
  iconSize: 'sm',
  ariaLabel: 'Plain reload rounded button',
  gradeBand: GradeBand.G4_5,
};

export const withBackgroundColors: Story = Template.bind({});
withBackgroundColors.args = {
  ...Default.args,
  backgroundColor: 'red-s45',
};
