import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Paper, PaperProps } from './Paper';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';

const meta: Meta<typeof Paper> = {
  component: Paper,
  title: 'Layout/Paper',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

const Template: StoryFn<PaperProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);
  const gradeBand = args.gradeBand ?? GradeBand.G4_5;

  return (
    <ButtonMenuProvider>
      <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
        <div ref={themeWrapperRef}>
          <Paper {...args} />
        </div>
      </ConnectTheme>
    </ButtonMenuProvider>
  );
};

export const Default: Story = Template.bind({});
export const Aside: Story = Template.bind({});

Default.args = {
  children: 'Paper',
  element: 'div',
  elevation: 0,
  roundedCorner: false,
  backgroundColor: '',
  className: '',
  dataTestId: '',
  gradeBand: GradeBand.G4_5,
};

Aside.args = {
  ...Default.args,
  children: 'Aside',
  element: 'aside',
  elevation: 2,
  className: 'connect__aside',
};

Aside.parameters = {
  layout: 'fullscreen',
};
