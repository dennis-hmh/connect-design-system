import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Colors, { Color } from '../utils/colors';
import { Stack } from '../components/Stack/Stack';
import { Typography } from '../components/Typography/Typography';
import { Paper } from './Paper/Paper';
import { Grid } from '../components/Grid/Grid';
import { GridItem } from '../components/GridItem/GridItem';
import { ConnectTheme } from './ConnectTheme';
import { GradeBand } from '../enum/gradeband';

type StoryProps = {
  gradeBand?: GradeBand;
};

const meta: Meta<StoryProps> = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    gradeBand: {
      control: 'select',
      options: Object.values(GradeBand),
      defaultValue: GradeBand.G4_5,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ colorName, colorValue }: { colorName: string; colorValue: string }) => (
  <Paper elevation={2} roundedCorner={true} backgroundColor="white">
    <Stack
      xs={{
        direction: 'column',
        alignItems: 'stretch',
        justifyContent: 'start',
        spacing: 'zero',
        paddingX: 'zero',
        paddingY: 'zero',
      }}
    >
      <Paper
        elevation={0}
        roundedCorner={{
          topAll: true,
        }}
        backgroundColor={colorName as Color}
        fullWidth={true}
      >
        <div style={{ height: 'var(--connect__spacer-xxl)' }} />
      </Paper>
      <Stack
        xs={{
          direction: 'column',
          alignItems: 'stretch',
          justifyContent: 'start',
          spacing: 'xs',
          paddingX: 'sm',
          paddingY: 'xs',
        }}
      >
        <Typography element="p" weight={500} size="body-lg">
          {colorName}
        </Typography>
        <Typography element="p">{colorValue}</Typography>
      </Stack>
    </Stack>
  </Paper>
);
const groupColors = (colors: Record<string, string>) => {
  const groups: Record<string, Record<string, string>> = {
    'Surface Colors': {},
    'State Colors': {},
    'Brand Colors': {},
    'Essential Guide Colors': {},
    'Special Values': {},
  };

  Object.entries(colors).forEach(([name, value]) => {
    if (name.startsWith('surface-')) {
      groups['Surface Colors'][name] = value;
    } else if (
      name.startsWith('correct-') ||
      name.startsWith('error-') ||
      name.startsWith('incorrect-') ||
      name.startsWith('primary-') ||
      name.startsWith('focus-') ||
      name.startsWith('hint-') ||
      name.startsWith('disabled-')
    ) {
      groups['State Colors'][name] = value;
    } else if (name.startsWith('brand-') || name === 'cc-purple') {
      groups['Brand Colors'][name] = value;
    } else if (name.startsWith('essential-guide-')) {
      groups['Essential Guide Colors'][name] = value;
    } else {
      groups['Special Values'][name] = value;
    }
  });

  return groups;
};

export const ColorPalette: Story = {
  render: (args) => {
    const themeWrapperRef = useRef<HTMLDivElement>(null);
    const colorGroups = groupColors(Colors);

    return (
      <ConnectTheme gradeBand={args.gradeBand ?? GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
        <div ref={themeWrapperRef}>
          {Object.entries(colorGroups).map(([groupName, colors]) => (
            <Stack
              key={groupName}
              xs={{
                direction: 'column',
                alignItems: 'stretch',
                justifyContent: 'start',
                spacing: 'md',
              }}
            >
              <Typography element="h2">{groupName}</Typography>
              <Stack
              key={groupName}
              xs={{
                direction: 'row',
                alignItems: 'stretch',
                justifyContent: 'start',
                spacing: 'md',
              }}
            >
                {Object.entries(colors).map(([name, value]) => (
                    <ColorSwatch colorName={name} colorValue={value} />
                ))}
              </Stack>
            </Stack>
          ))}
        </div>
      </ConnectTheme>
    );
  },
};
