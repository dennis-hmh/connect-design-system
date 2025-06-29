import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Stack } from '../Stack/Stack';
import { IconButton } from '../IconButton/IconButton';
import { Icon } from '../Icon/Icon';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Tooltip> = {
  title: 'wip/Tooltip',
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
      <div ref={themeWrapperRef} style={{ position: 'relative' }}>
        <Tooltip {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  title: 'This is a tooltip',
  children: (
    <IconButton variant="text" ariaLabel="Info">
      <Icon id="info" size="sm" />
    </IconButton>
  ),
  color: 'white',
  placement: 'top',
  elevation: 4,
  disableInteractive: false,
  disableTouchListener: false,
  describeChild: false,
  gradeBand: GradeBand.G4_5,
};

// This works but need a max width from design so ignore for now

// export const WithLongContent: Story = Template.bind({});
// WithLongContent.args = {
//   ...Default.args,
//   title: 'This is a tooltip with much longer content that might wrap to multiple lines',
//   placement: 'bottom',
//   textWrap: 'wrap',
// };

export const WithCustomPlacement: Story = Template.bind({});
WithCustomPlacement.args = {
  ...Default.args,
  placement: 'right-start',
  children: (
    <IconButton variant="text" ariaLabel="Desmos Calculator">
      <Icon id="desmos" size="sm" />
    </IconButton>
  ),
};

export const CustomStyle: Story = Template.bind({});
CustomStyle.args = {
  ...Default.args,
  backgroundColor: 'primary-mid',
  children: (
    <IconButton variant="text" ariaLabel="Info">
      <Icon id="info" size="lg" />
    </IconButton>
  ),
};
