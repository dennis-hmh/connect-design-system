import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Stack, StackProps } from './Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Template: StoryFn<StackProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Stack {...args}>
          <Stack sm={{ direction: 'row', spacing: 'sm' }}>
            <div
              style={{
                background: 'var(--connect__correct-light)',
                padding: 'var(--connect__spacer-md)',
              }}
            >
              1 row
            </div>
            <div
              style={{
                background: 'var(--connect__correct-mid)',
                padding: 'var(--connect__spacer-md)',
              }}
            >
              2 row
            </div>
            <div
              style={{
                background: 'var(--connect__correct-light)',
                padding: 'var(--connect__spacer-md)',
              }}
            >
              3 row
            </div>
          </Stack>
          <Stack sm={{ direction: 'column', spacing: 'sm' }}>
            <div
              style={{
                background: 'var(--connect__correct-light)',
                padding: 'var(--connect__spacer-md)',
              }}
            >
              1 column
            </div>
            <div
              style={{
                background: 'var(--connect__correct-mid)',
                padding: 'var(--connect__spacer-md)',
              }}
            >
              2 column
            </div>
            <div
              style={{
                background: 'var(--connect__correct-light)',
                padding: 'var(--connect__spacer-md)',
              }}
            >
              3 column
            </div>
          </Stack>
        </Stack>
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  sm: { direction: 'column', spacing: 'sm' },
  md: { direction: 'row', spacing: 'md', alignItems: 'center', justifyContent: 'space-between' },
  lg: { spacing: 'lg', paddingX: 'lg', paddingY: 'lg' },
  xl: { spacing: 'xl', paddingX: 'xl', paddingY: 'xl' },
  className: '',
  dataTestId: '',
};
