import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const Template: StoryFn<TooltipProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
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
  placement: 'top-center',
  backgroundColor: 'surface-dark',
  color: 'white',
  size: 'caption',
  elevation: 4,
  enterDelay: 200,
  leaveDelay: 0,
  disableInteractive: false,
  disableTouchListener: false,
  describeChild: false,
  gradeBand: GradeBand.G4_5,
};

export const WithLongContent: Story = Template.bind({});
WithLongContent.args = {
  ...Default.args,
  title: 'This is a tooltip with much longer content that might wrap to multiple lines',
  size: 'body-md',
  textWrap: 'wrap',
};

export const WithCustomPlacement: Story = Template.bind({});
WithCustomPlacement.args = {
  ...Default.args,
  placement: 'center-right',
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

export const CustomStyle: Story = Template.bind({});
CustomStyle.args = {
  ...Default.args,
  backgroundColor: 'primary-mid',
  color: 'white',
  size: 'body-md',
  style: 'italic',
  weight: 600,
  elevation: 6,
  children: <ButtonMenu id="info" iconId="info" iconSize="lg" ariaLabel="Information" />,
};
