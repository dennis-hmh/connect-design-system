import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Alert, AlertProps } from './Alert';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Alert> = {
  title: 'Misc/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

const Template: StoryFn<AlertProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Alert {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  iconId: 'info',
  children: (
    <>
      <Typography element="h5" size="body-sm" weight={700}>
        [Title] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography element="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt sit amet lectus
        vel lacinia. Proin in orci at ligula eleifend malesuada eu quis eros. Vivamus felis arcu,
        faucibus vitae elit sit amet, convallis molestie libero. Phasellus vulputate semper porta.
        Sed mollis sapien id dapibus luctus. Sed sodales enim a justo rutrum iaculis..
      </Typography>
    </>
  ),
  handleClick: () => console.log('Close button clicked'),
  gradeBand: GradeBand.G4_5,
};

export const NoCloseBtn: Story = Template.bind({});
NoCloseBtn.args = {
  iconId: 'info',
  children: (
    <>
      <Typography element="h5" size="body-sm">
        Alert Heading
      </Typography>
      <Typography element="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt sit amet lectus
        vel lacinia. Proin in orci at ligula eleifend malesuada eu quis eros. Vivamus felis arcu,
        faucibus vitae elit sit amet, convallis molestie libero. Phasellus vulputate semper porta.
        Sed mollis sapien id dapibus luctus. Sed sodales enim a justo rutrum iaculis..
      </Typography>
    </>
  ),
  gradeBand: GradeBand.G4_5,
};
