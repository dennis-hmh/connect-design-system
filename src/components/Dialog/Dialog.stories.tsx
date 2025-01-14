import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Dialog, DialogProps } from './Dialog';
import { Button } from '../Button/Button';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Dialog> = {
  title: 'Misc/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

const Template: StoryFn<DialogProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  const handleOpenDialog = () => {
    document.querySelector<HTMLDialogElement>('[id="dialog-test"]')?.showModal();
  };

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Button primary clickHandler={handleOpenDialog}>
          Open Dialog
        </Button>
        <Dialog {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: 'Dialog Text',
  id: 'dialog-test',
  heading: 'Dialog Heading',
  expand: true,
  collapse: true,
  gradeBand: GradeBand.G4_5,
};
