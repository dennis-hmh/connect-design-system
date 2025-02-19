import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';

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
  placement: 'top',
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
  children: <ButtonMenu id="desmos" iconId="desmos" iconSize="md" ariaLabel="Desmos Calculator" />,
};

export const CustomStyle: Story = Template.bind({});
CustomStyle.args = {
  ...Default.args,
  backgroundColor: 'primary-mid',
  color: 'white',
  children: <ButtonMenu id="info" iconId="info" iconSize="lg" ariaLabel="Information" />,
};
