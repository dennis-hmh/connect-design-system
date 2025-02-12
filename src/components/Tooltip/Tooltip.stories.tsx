import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';
import Colors, { Color } from '../../utils/colors'; // Import Colors

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip',
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(Colors) as Color[], 
      description: 'Background color of the tooltip',
    },
    color: {
      control: 'select',
      options: Object.keys(Colors) as Color[], 
      description: 'Text color of the tooltip',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'unset'],
      description: 'Size of the tooltip text',
    },
    elevation: {
      control: 'select',
      options: [-2, 0, 2, 4, 6],
      description: 'Shadow elevation of the tooltip',
    },
    enterDelay: {
      control: 'number',
      description: 'Delay before showing tooltip (ms)',
    },
    leaveDelay: {
      control: 'number',
      description: 'Delay before hiding tooltip (ms)',
    },
    disableInteractive: {
      control: 'boolean',
      description: 'Disable hover interaction',
    },
    disableTouchListener: {
      control: 'boolean',
      description: 'Disable touch interaction',
    },
    describeChild: {
      control: 'boolean',
      description: 'Use aria-describedby instead of aria-labelledby',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const Template: StoryFn<TooltipProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div
        ref={themeWrapperRef}
        style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}
      >
        <ButtonMenuProvider>
          <Tooltip {...args} />
        </ButtonMenuProvider>
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  title: 'This is a tooltip',
  children: <ButtonMenu id="info" iconId="info" iconSize="md" ariaLabel="Info" />,
  gradeBand: GradeBand.G4_5,
  placement: 'top',
  backgroundColor: 'surface-dark',
  color: 'white',
  size: 'sm',
  elevation: 4,
  enterDelay: 200,
  leaveDelay: 0,
  disableInteractive: false,
  disableTouchListener: false,
  describeChild: false,
};

export const WithLongContent: Story = Template.bind({});
WithLongContent.args = {
  ...Default.args,
  title: 'This is a tooltip with much longer content that might wrap to multiple lines',
  size: 'md',
};

export const WithCustomPlacement: Story = Template.bind({});
WithCustomPlacement.args = {
  ...Default.args,
  placement: 'right',
  children: <ButtonMenu id="desmos" iconId="desmos" iconSize="md" ariaLabel="Desmos Calculator" />,
};

export const Interactive: Story = Template.bind({});
Interactive.args = {
  ...Default.args,
  title: 'Hover over me for a while',
  disableInteractive: false,
  enterDelay: 500,
  leaveDelay: 200,
  children: (
    <ButtonMenu
      id="groupActivity"
      iconId="groupActivity"
      iconSize="md"
      ariaLabel="Group Activity"
    />
  ),
};

export const AccessibleDescription: Story = Template.bind({});
AccessibleDescription.args = {
  ...Default.args,
  title: 'This tooltip describes the button for screen readers',
  describeChild: true,
  children: <ButtonMenu id="add" iconId="add" iconSize="md" ariaLabel="Add Item" />,
};

export const CustomStyle: Story = Template.bind({});
CustomStyle.args = {
  ...Default.args,
  backgroundColor: 'primary-mid',
  size: 'lg',
  elevation: 6,
  children: <ButtonMenu id="info" iconId="info" iconSize="lg" ariaLabel="Information" />,
};
