import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Colors, { Color } from '../../utils/colors';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';
import { Paper } from '../Paper/Paper';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

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
  <Paper elevation={2} roundedCorner={true} backgroundColor="white" fullWidth={true}>
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
        <div style={{ height: 'calc(var(--connect__spacer-xxl) * 3)' }} />
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
      'Surface Pack': {},
    },
    'Content Colors': {
      'Orange Pack': {},
      'Yellow Pack': {},
      'Green Pack': {},
      'Aqua Pack': {},
      'Blue Pack': {},
      'Violet Pack': {},
      'Purple Pack': {},
    },
    'Brand Colors': {
      'Gold Pack': {},
      'Orange Pack': {},
      'Magenta Pack': {},
      'Deep Magenta Pack': {},
    },
    'Neutral Colors': {
      'Light Pack': {},
      'Dark Pack': {},
    },
    'Deprecated': {
      'Surface': {},
      'Feedback': {},
      'State': {},
      'Primary': {},
      'Hint': {},
      'Focus': {},
      'Brand': {},
      'Essential Guides': {},
      'Reading Palette': {},
      'Special Values': {},
      'Legacy Colors': {},
    }
  };

  Object.entries(colors).forEach(([name, value]) => {
    // Handle new surface colors (0-1000) and surface-null
    if ((name.startsWith('surface-') && /surface-\d+/.test(name)) || name === 'surface-null') {
      groups['Surface Colors']['Surface Pack'][name] = value;
    }
    // Handle content colors
    else if (name.startsWith('content-')) {
      const [_, color, shade] = name.split('-');
      const colorName = color.charAt(0).toUpperCase() + color.slice(1);
      if (groups['Content Colors'][`${colorName} Pack`]) {
        groups['Content Colors'][`${colorName} Pack`][name] = value;
      }
    }
    // Handle new brand colors
    else if (name.startsWith('brand-') && /brand-\w+-\d+/.test(name)) {
      const [_, color, shade] = name.split('-');
      let colorName = color.charAt(0).toUpperCase() + color.slice(1);
      if (color === 'deep-magenta') {
        colorName = 'Deep Magenta';
      }
      if (groups['Brand Colors'][`${colorName} Pack`]) {
        groups['Brand Colors'][`${colorName} Pack`][name] = value;
      }
    }
    // Handle all deprecated colors
    else {
      if (name.startsWith('surface-')) {
        groups['Deprecated']['Surface'][name] = value;
      }
      else if (name.startsWith('correct-') || name.startsWith('incorrect-') || name.startsWith('shown-')) {
        groups['Deprecated']['Feedback'][name] = value;
      }
      else if (name.startsWith('success-') || name.startsWith('error-')) {
        groups['Deprecated']['State'][name] = value;
      }
      else if (name.startsWith('primary-')) {
        groups['Deprecated']['Primary'][name] = value;
      }
      else if (name.startsWith('hint-')) {
        groups['Deprecated']['Hint'][name] = value;
      }
      else if (name.startsWith('focus-')) {
        groups['Deprecated']['Focus'][name] = value;
      }
      else if (name.startsWith('cc-') || (name.startsWith('brand-') && !/brand-\w+-\d+/.test(name))) {
        groups['Deprecated']['Brand'][name] = value;
      }
      else if (name.startsWith('essential-guide-')) {
        groups['Deprecated']['Essential Guides'][name] = value;
      }
      else if (name.startsWith('periwinkle-')) {
        groups['Deprecated']['Reading Palette'][name] = value;
      }
      else if (['white', 'black', 'unset', 'transparent'].includes(name)) {
        groups['Deprecated']['Special Values'][name] = value;
      }
      else {
        // All other legacy colors (gray-c70, red-c55, etc.)
        groups['Deprecated']['Legacy Colors'][name] = value;
      }
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
              paddingY: 'lg',
              spacing: 'xl',
            }}
          >
            <Stack
              xs={{
                direction: 'column',
                alignItems: 'stretch',
                justifyContent: 'start',
                paddingX: 'zero',
                paddingY: 'zero',
                spacing: 'sm',
              }}
            >
              <Typography element="h1">Color palette</Typography>
              <Typography element="p">
                This page outlines the color palette available in the Connect design system.
              </Typography>
            </Stack>
            {Object.entries(colorGroups).map(([groupName, subGroups]) => (
              <Stack
                key={groupName}
                xs={{
                  direction: 'column',
                  alignItems: 'stretch',
                  justifyContent: 'start',
                  paddingX: 'zero',
                  paddingY: 'zero',
                  spacing: 'md',
                }}
              >
                <Typography element="h2" size="heading-sm">
                  {groupName}
                </Typography>
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
                    <Typography element="h3" size='body-lg'>
                      {subGroupName}
                    </Typography>
                    <Stack
                      xs={{
                        direction: 'row',
                        alignItems: 'start',
                        justifyContent: 'start',
                        flexWrap: 'wrap',
                        spacing: 'lg',
                      }}
                    >
                      {Object.entries(colors).map(([name, value]) => (
                        <Stack flex="shrink" key={name}>
                          <ColorSwatch colorName={name} colorValue={value} />
                        </Stack>
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
