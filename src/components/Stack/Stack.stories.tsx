import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Stack, StackProps } from '../Stack/Stack';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { Paper } from '../Paper/Paper';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { Image } from '../Image/Image';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Template: StoryFn<StackProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <div style={{ padding: 'var(--connect__spacer-lg' }}>
          <Stack {...args} />
        </div>
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  children: 'Stack',
  element: 'div',
};

export const ResponsiveStack: Story = Template.bind({});
ResponsiveStack.args = {
  children: (
    <>
      <Stack paddingY="sm" paddingX="sm">
        Item 1
      </Stack>
      <Stack paddingY="sm" paddingX="sm">
        Item 2
      </Stack>
      <Stack paddingY="sm" paddingX="sm">
        Item 3
      </Stack>
    </>
  ),
  element: 'article',
  paddingX: 'md',
  paddingY: 'sm',
  lg: { direction: 'row', spacing: 'xl', paddingY: 'md' },
};

export const Layouts: Story = Template.bind({});
Layouts.args = {
  children: (
    <>
      <Stack>
        <Paper backgroundColor="surface-pale" roundedCorner={true}>
          <Stack paddingY="sm" paddingX="sm">
            Item 1 shrinks
          </Stack>
        </Paper>
      </Stack>
      <Stack flex="fill">
        <Paper backgroundColor="surface-pale" roundedCorner={true}>
          <Stack paddingY="sm" paddingX="sm">
            Item 2 grows
          </Stack>
        </Paper>
      </Stack>
      <Stack flex="grow">
        <Paper backgroundColor="surface-pale" roundedCorner={true}>
          <Stack paddingY="sm" paddingX="sm">
            Item 3 doesn't shrink
          </Stack>
        </Paper>
      </Stack>
    </>
  ),
  element: 'article',
  alignItems: 'center',
  paddingX: 'md',
  paddingY: 'sm',
  spacing: 'sm',
  lg: { direction: 'row', spacing: 'xl', paddingY: 'md' },
};

export const NestedLayouts: Story = Template.bind({});
NestedLayouts.args = {
  children: (
    <>
      <Stack spacing="xs" alignItems="start">
        <Paper roundedCorner={true} backgroundColor="white" fullWidth={true} elevation={0}>
          <Stack spacing="md" paddingY="lg" paddingX="lg">
            <Typography color="surface-dark" element="h4" size="heading-md">
              Stack Layouts
            </Typography>

            <Stack
              xl={{
                flexWrap: 'nowrap',
                spacing: 'lg',
              }}
              alignItems="start"
              direction="row"
              flexWrap="wrap"
              spacing="lg"
            >
              <Stack>
                <Typography element="h4" size="heading-sm" color="surface-dark">
                  Left Column
                </Typography>

                <Typography size="body-sm" color="surface-dark" style="italic" element="p">
                  Text
                </Typography>

                <Typography size="body-sm" color="surface-dark" element="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Stack>

              <Stack>
                <Typography element="h4" size="heading-sm" color="surface-dark">
                  Right Column
                </Typography>

                <Typography size="body-sm" color="surface-dark" style="italic" element="p">
                  Text
                </Typography>

                <Typography size="body-sm" color="surface-dark" element="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing="md">
              <Typography element="h4" size="heading-sm" color="surface-dark">
                Full width
              </Typography>
              <Typography size="body-sm" color="surface-dark" element="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Stack>
            <Stack
              spacing="xs"
              justifyContent="space-between"
              flex="fill"
              lg={{
                direction: 'row',
              }}
            >
              <Button primary={false}>
                <Typography element="p" size="body-sm">
                  Button
                </Typography>
              </Button>
              <Button primary={true}>
                <Typography element="p" size="body-sm">
                  Button
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </>
  ),
  element: 'article',
  alignItems: 'center',
  paddingX: 'md',
  paddingY: 'sm',
  lg: { direction: 'row', spacing: 'xl', paddingY: 'md' },
};

export const CustomStyleStack: Story = Template.bind({});
CustomStyleStack.args = {
  children: (
    <>
      <Stack
        paddingY="sm"
        paddingX="sm"
        flex="fill"
        customStyle={{
          backgroundColor: 'var(--connect__surface-light)',
          color: 'white',
        }}
      >
        Item 1
      </Stack>
      <Stack
        flex="fill"
        paddingY="sm"
        paddingX="sm"
        customStyle={{
          backgroundColor: 'var(--connect__surface-light)',
          color: 'white',
        }}
      >
        Item 2
      </Stack>
      <Stack
        flex="fill"
        paddingY="sm"
        paddingX="sm"
        customStyle={{
          backgroundColor: 'var(--connect__surface-light)',
          color: 'white',
        }}
      >
        Item 3
      </Stack>
    </>
  ),
  element: 'section',
  spacing: 'xs',
  paddingX: 'md',
  paddingY: 'sm',
  lg: { direction: 'row', spacing: 'xl', paddingX: 'xl' },
};
