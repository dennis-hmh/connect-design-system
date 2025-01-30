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
  const groups: Record<string, Record<string, Record<string, string>>> = {
    'Surface Colors': {
      Surface: {},
    },
    'State Colors': {
      Correct: {},
      Error: {},
      Incorrect: {},
      Primary: {},
      Focus: {},
      Hint: {},
      Disabled: {},
    },
    'Brand Colors': {
      Brand: {},
    },
    'Essential Guide Colors': {
      'Essential Guide': {},
    },
    'Special Values': {
      Special: {},
    },
  };

  Object.entries(colors).forEach(([name, value]) => {
    if (name.startsWith('surface-')) {
      groups['Surface Colors']['Surface'][name] = value;
    } else if (name.startsWith('correct-')) {
      groups['State Colors']['Correct'][name] = value;
    } else if (name.startsWith('error-')) {
      groups['State Colors']['Error'][name] = value;
    } else if (name.startsWith('incorrect-')) {
      groups['State Colors']['Incorrect'][name] = value;
    } else if (name.startsWith('primary-')) {
      groups['State Colors']['Primary'][name] = value;
    } else if (name.startsWith('focus-')) {
      groups['State Colors']['Focus'][name] = value;
    } else if (name.startsWith('hint-')) {
      groups['State Colors']['Hint'][name] = value;
    } else if (name.startsWith('disabled-')) {
      groups['State Colors']['Disabled'][name] = value;
    } else if (name.startsWith('brand-') || name === 'cc-purple') {
      groups['Brand Colors']['Brand'][name] = value;
    } else if (name.startsWith('essential-guide-')) {
      groups['Essential Guide Colors']['Essential Guide'][name] = value;
    } else {
      groups['Special Values']['Special'][name] = value;
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
          <Stack
            xs={{
              direction: 'column',
              alignItems: 'stretch',
              justifyContent: 'start',
              paddingX: 'md',
              spacing: 'xl',
            }}
          >
            {Object.entries(colorGroups).map(([groupName, subGroups]) => (
              <Stack
                key={groupName}
                xs={{
                  direction: 'column',
                  alignItems: 'stretch',
                  justifyContent: 'start',
                  paddingX: 'md',
                  spacing: 'xl',
                }}
              >
                {Object.entries(subGroups).map(([subGroupName, colors]) => (
                  <Stack
                    key={subGroupName}
                    xs={{
                      direction: 'column',
                      alignItems: 'stretch',
                      justifyContent: 'start',
                      spacing: 'md',
                    }}
                  >
                    <Typography element="h3" size="heading-sm">
                      {subGroupName}
                    </Typography>
                    <Stack
                      xs={{
                        direction: 'row',
                        alignItems: 'stretch',
                        justifyContent: 'start',
                        flexWrap: 'wrap',
                        spacing: 'xs',
                      }}
                    >
                      {Object.entries(colors).map(([name, value]) => (
                        <ColorSwatch key={name} colorName={name} colorValue={value} />
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </div>
      </ConnectTheme>
    );
  },
};
