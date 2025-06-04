import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Colors, { Color } from '../../utils/colors';
import { Stack } from '../Stack/Stack';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';
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
        <Typography element="p" weight={500} size="caption">
          {colorName}
        </Typography>
        <Typography element="p" size="credits">
          {colorValue}
        </Typography>
      </Stack>
    </Stack>
  </Paper>
);

const groupColors = (colors: Record<string, string>) => {
  const groups: Record<string, Record<string, Record<string, string>>> = {
    'Primary Colors': {
      'Primary Pack': {},
      'Secondary Pack': {},
    },
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
    'Accent Colors': {
      'Gold Pack': {},
      'Orange Pack': {},
      'Magenta Pack': {},
      'Deep Magenta Pack': {},
    },
    'Neutral Colors': {
      'Light Pack': {},
      'Dark Pack': {},
    },
    Deprecated: {
      Surface: {},
      Feedback: {},
      State: {},
      Primary: {},
      Hint: {},
      Focus: {},
      Brand: {},
      'Essential Guides': {},
      'Reading Palette': {},
      'Special Values': {},
      'Legacy Colors': {},
    },
  };

  Object.entries(colors).forEach(([name, value]) => {
    if (name.match(/^(primary|secondary)-\d+$/)) {
      const [colorType] = name.split('-');
      const colorName = colorType.charAt(0).toUpperCase() + colorType.slice(1);
      groups['Primary Colors'][`${colorName} Pack`][name] = value;
    } else if (
      (name.startsWith('surface-') && /surface-\d+/.test(name)) ||
      name === 'surface-null'
    ) {
      groups['Surface Colors']['Surface Pack'][name] = value;
    } else if (name.startsWith('content-')) {
      const [_, color, shade] = name.split('-');
      const colorName = color.charAt(0).toUpperCase() + color.slice(1);
      if (groups['Content Colors'][`${colorName} Pack`]) {
        groups['Content Colors'][`${colorName} Pack`][name] = value;
      }
    } else if (name.startsWith('brand-')) {
      // Match brand-<color>-<number> (e.g., brand-deep-magenta-100)
      const match = name.match(/^brand-(.+)-(\d+)$/);
      if (match) {
        let color = match[1];
        let colorName =
          color.charAt(0).toUpperCase() +
          color.slice(1).replace(/-([a-z])/g, (_, c) => ' ' + c.toUpperCase());
        if (color === 'deep-magenta') colorName = 'Deep Magenta';
        if (groups['Accent Colors'][`${colorName} Pack`]) {
          groups['Accent Colors'][`${colorName} Pack`][name] = value;
        }
      } else {
        groups['Deprecated']['Brand'][name] = value;
      }
    } else if (name.startsWith('cc-')) {
      groups['Deprecated']['Brand'][name] = value;
    } else if (name.startsWith('neutral-')) {
      if (name.includes('light-')) {
        groups['Neutral Colors']['Light Pack'][name] = value;
      } else if (name.includes('dark-')) {
        groups['Neutral Colors']['Dark Pack'][name] = value;
      }
    }
    // Legacy primary/secondary colors the ones with dark mid etc
    else if (name.match(/^(primary|secondary)-(dark|mid|light|pale)$/)) {
      groups['Deprecated']['Primary'][name] = value;
    } else {
      if (name.startsWith('surface-')) {
        groups['Deprecated']['Surface'][name] = value;
      } else if (
        name.startsWith('correct-') ||
        name.startsWith('incorrect-') ||
        name.startsWith('shown-')
      ) {
        groups['Deprecated']['Feedback'][name] = value;
      } else if (name.startsWith('success-') || name.startsWith('error-')) {
        groups['Deprecated']['State'][name] = value;
      } else if (name.startsWith('hint-')) {
        groups['Deprecated']['Hint'][name] = value;
      } else if (name.startsWith('focus-')) {
        groups['Deprecated']['Focus'][name] = value;
      } else if (name.startsWith('essential-guide-')) {
        groups['Deprecated']['Essential Guides'][name] = value;
      } else if (name.startsWith('periwinkle-')) {
        groups['Deprecated']['Reading Palette'][name] = value;
      } else if (['white', 'black', 'unset', 'transparent'].includes(name)) {
        groups['Deprecated']['Special Values'][name] = value;
      } else {
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
          <Paper elevation={0} backgroundColor="surface-0">
            <Stack
              xs={{
                direction: 'column',
                alignItems: 'stretch',
                justifyContent: 'start',
                paddingX: 'md',
                paddingY: 'lg',
                spacing: 'xl',
              }}
              customStyle={{ maxWidth: '1024px', margin: 'auto' }}
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
                <Typography element="h1" size="heading-lg">
                  Color palette
                </Typography>
                <Typography element="p">
                  This page outlines the color palette available in the Connect design system v1.
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
                    spacing: 'xl',
                  }}
                >
                  <Stack
                    xs={{
                      direction: 'column',
                      alignItems: 'stretch',
                      justifyContent: 'start',
                      spacing: 'md',
                    }}
                  >
                    <Typography element="h2" size="body-lg">
                      {groupName}
                    </Typography>
                  </Stack>
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
                      <Stack
                        xs={{
                          direction: 'column',
                          alignItems: 'stretch',
                          justifyContent: 'start',
                          spacing: 'xs',
                        }}
                      >
                        <Typography element="h3" size="body-md">
                          {subGroupName}
                        </Typography>
                      </Stack>
                      <Grid
                        xs={{ alignItems: 'stretch' }}
                        gap="sm"
                        gridTemplateColumns="repeat(auto-fit,minmax(min(180px, 100%), 1fr))"
                      >
                        {Object.entries(colors).map(([name, value]) => (
                          <GridItem key={name} xs={{ spanCol: 1 }}>
                            <ColorSwatch colorName={name} colorValue={value} />
                          </GridItem>
                        ))}
                      </Grid>
                    </Stack>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Paper>
        </div>
      </ConnectTheme>
    );
  },
};
