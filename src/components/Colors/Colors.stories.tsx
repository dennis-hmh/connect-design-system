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
    Feedback: {
      Correct: {},
      Incorrect: {},
      Shown: {},
    },
    States: {
      Success: {},
      Error: {},
    },
    Primary: {
      Primary: {},
    },
    Hint: {
      Hint: {},
    },
    Focus: {
      Focus: {},
    },
    Brand: {
      Brand: {},
    },
    'Essential Guides': {
      'Essential Guide': {},
    },
    Deprecated: {
      Gray: {},
      Red: {},
      Cerise: {},
      Purple: {},
      Blue: {},
      Aqua: {},
      Apple: {},
      Green: {},
    },
  };

  Object.entries(colors).forEach(([name, value]) => {
    if (name.startsWith('surface-')) {
      groups['Surface Colors']['Surface'][name] = value;
    } else if (name.startsWith('correct-')) {
      groups['Feedback']['Correct'][name] = value;
    } else if (name.startsWith('incorrect-')) {
      groups['Feedback']['Incorrect'][name] = value;
    } else if (name.startsWith('shown-')) {
      groups['Feedback']['Shown'][name] = value;
    } else if (name.startsWith('success-')) {
      groups['States']['Success'][name] = value;
    } else if (name.startsWith('error-')) {
      groups['States']['Error'][name] = value;
    } else if (name.startsWith('primary-')) {
      groups['Primary']['Primary'][name] = value;
    } else if (name.startsWith('hint-')) {
      groups['Hint']['Hint'][name] = value;
    } else if (name.startsWith('focus-')) {
      groups['Focus']['Focus'][name] = value;
    } else if (name.startsWith('cc-purple') || name.startsWith('brand-')) {
      groups['Brand']['Brand'][name] = value;
    } else if (name.startsWith('essential-guide-')) {
      groups['Essential Guides']['Essential Guide'][name] = value;
    } else if (name.startsWith('gray-')) {
      groups['Deprecated']['Gray'][name] = value;
    } else if (name.startsWith('red-')) {
      groups['Deprecated']['Red'][name] = value;
    } else if (name.startsWith('cerise-')) {
      groups['Deprecated']['Cerise'][name] = value;
    } else if (name.startsWith('purple-')) {
      groups['Deprecated']['Purple'][name] = value;
    } else if (name.startsWith('blue-')) {
      groups['Deprecated']['Blue'][name] = value;
    } else if (name.startsWith('aqua-')) {
      groups['Deprecated']['Aqua'][name] = value;
    } else if (name.startsWith('apple-')) {
      groups['Deprecated']['Apple'][name] = value;
    } else if (name.startsWith('green-')) {
      groups['Deprecated']['Green'][name] = value;
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
                  spacing: 'xl',
                }}
              >
                <Stack
                  key={groupName}
                  xs={{
                    direction: 'column',
                    alignItems: 'start',
                    justifyContent: 'start',
                    paddingX: 'zero',
                    paddingY: 'zero',
                    spacing: 'xs',
                  }}
                >
                  <Typography element="h2" size="heading-sm">
                    {groupName}
                  </Typography>
                  {groupName === 'Surface Colors' && (
                    <Typography element="p">
                      Surface colors are used as the background for various UI components, providing
                      a base for other elements and helping to create a visual hierarchy.
                    </Typography>
                  )}
                  {groupName === 'Feedback' && (
                    <Typography element="p">
                      Feedback colors indicate the status of UI elements, such as success (correct),
                      error (incorrect), and shown states.
                    </Typography>
                  )}
                  {groupName === 'States' && (
                    <Typography element="p">
                      State colors indicate the success or error of actions taken by the user.
                    </Typography>
                  )}
                  {groupName === 'Primary' && (
                    <Typography element="p">
                      Primary colors are used for key interactive elements in the UI.
                    </Typography>
                  )}
                  {groupName === 'Hint' && (
                    <Typography element="p">
                      Hint colors provide additional context or guidance to users.
                    </Typography>
                  )}
                  {groupName === 'Focus' && (
                    <Typography element="p">
                      Focus colors are used to indicate elements that are currently focused.
                    </Typography>
                  )}
                  {groupName === 'Brand' && (
                    <Typography element="p">
                      Brand colors represent the brand identity and are applied to key components.
                    </Typography>
                  )}
                  {groupName === 'Essential Guides' && (
                    <Typography element="p">
                      Essential guide colors provide additional context or guidance to users, often
                      used in instructional elements.
                    </Typography>
                  )}
                  {groupName === 'Deprecated' && (
                    <Typography element="p">
                      These colors are used to make up the colors listed above and should not be
                      passed directly. By using the colors above we can support theming in the
                      future.
                    </Typography>
                  )}
                </Stack>
                {Object.entries(subGroups).map(([subGroupName, colors]) => (
                  <Stack
                    key={subGroupName}
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
                ))}
              </Stack>
            ))}
          </Stack>
        </div>
      </ConnectTheme>
    );
  },
};
