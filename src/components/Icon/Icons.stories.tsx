import React, { useRef } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Icon, IconProps } from './Icon';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { IconId } from '../../utils/icon-list';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Icons',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

// Icon groupings
const mathIcons: IconId[] = [
  'absoluteValue',
  'angle',
  'braces',
  'brackets',
  'cent',
  'colon',
  'comma',
  'decimal',
  'degree',
  'division',
  'dollar',
  'exponent',
  'fraction',
  'functionComposition',
  'infinity',
  'intersection',
  'isAnElementOf',
  'isApproximatelyEqualTo',
  'isCongruentTo',
  'isEqualTo',
  'isGreaterThan',
  'isGreaterThanOrEqualTo',
  'isLessThan',
  'isLessThanOrEqualTo',
  'isNotAnElementOf',
  'isParallelTo',
  'isPerpendicularTo',
  'isSimilarTo',
  'line',
  'lineSegment',
  'mixedNumber',
  'multiplication',
  'multiplicationDot',
  'negative',
  'minus',
  'parenthesis',
  'percent',
  'pi',
  'plus',
  'ray',
  'squared',
  'squareRoot',
  'triangle',
  'union',
  'variableX',
  'variableY',
];

// Numbers are separated for potential special handling
const numberIcons: IconId[] = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const toolbarIcons: IconId[] = [
  'color',
  'counter',
  'drawSizeLg',
  'drawSizeMd',
  'drawSizeXs',
  'drawToolOutline',
  'lineArrow',
  'lineDashed',
  'lineSolid',
  'shapes',
  'shapesCircleOutline',
  'shapesCircleSolid',
  'shapesRectangleOutline',
  'shapesRectangleSolid',
  'shapesTriangleOutline',
  'shapesTriangleSolid',
  'specialShapes',
  'specialShapesHexagon',
  'specialShapesPentagon',
  'stampsCounterOutline',
  'stampsMeasureOutline',
];

const navigationIcons: IconId[] = [
  'arrowDown',
  'arrowUp',
  'collapse',
  'expand',
  'expandLeftFilled',
  'expandLeftOutline',
  'expandRightFilled',
  'expandRightOutline',
  'fullLeftFilled',
  'fullLeftOutline',
  'fullRightFilled',
  'fullRightOutline',
  'middleFilled',
  'middleOutline',
  'redo',
  'undo',
];

const programCategoryIcons: IconId[] = ['commonError', 'ml', 'syl', 'udl'];

const mediaIcons: IconId[] = [
  'micFilled',
  'micOff',
  'micOffFilled',
  'pause',
  'play',
  'repeat',
  'replay',
  'settingsVoice',
  'settingsVoiceFilled',
  'soundDetection',
  'soundDetectionFilled',
  'soundMeter',
  'speachToText',
  'repeat',
  'replay',
  'settingsVoice',
  'settingsVoiceFilled',
  'volumeDown',
  'volumeDownFilled',
  'volumeMute',
  'volumeMuteFilled',
  'volumeOff',
  'volumeOffFilled',
  'volumeUp',
  'volumeUpFilled',
];

const miscIcons: IconId[] = [
  'add',
  'backspace',
  'calculator',
  'check',
  'close',
  'desmos',

  'flag',
  'groupActivity',
  'groupActivityVariant',

  'info',
  'loader',
  'placeholder',
  'reduce',
  'renew',
  'soundMeter',
  'stop',
  'stopwatch',
  'timer',
  'user',
];

const Template: StoryFn<IconProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Stack spacing="lg">
          <Stack spacing="sm">
            <Typography size="body-lg" weight={600}>
              Math Icons
            </Typography>
            <Grid gap="md">
              {mathIcons.map((icon) => (
                <GridItem key={icon} xs={1}>
                  <Icon
                    id={icon}
                    size={args.size}
                    fill={args.fill}
                    stroke={args.stroke}
                    aria-hidden="true"
                    focusable={false}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>

          <Stack spacing="sm">
            <Typography size="body-lg" weight={600}>
              Number Icons
            </Typography>
            <Grid gridTemplateColumns="repeat(var(--connect__icon-size), 1fr))" gap="sm">
              {numberIcons.map((icon) => (
                <GridItem key={icon} xs={1}>
                  <Icon
                    id={icon}
                    size={args.size}
                    fill={args.fill}
                    stroke={args.stroke}
                    aria-hidden="true"
                    focusable={false}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>

          <Stack spacing="sm">
            <Typography size="body-lg" weight={600}>
              Toolbar Icons
            </Typography>
            <Grid gridTemplateColumns="repeat(var(--connect__icon-size), 1fr))" gap="sm">
              {toolbarIcons.map((icon) => (
                <GridItem key={icon} xs={1}>
                  <Icon
                    id={icon}
                    size={args.size}
                    fill={args.fill}
                    stroke={args.stroke}
                    aria-hidden="true"
                    focusable={false}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>

          <Stack spacing="sm">
            <Typography size="body-lg" weight={600}>
              Navigation Icons
            </Typography>
            <Grid gridTemplateColumns="repeat(var(--connect__icon-size), 1fr))" gap="sm">
              {navigationIcons.map((icon) => (
                <GridItem key={icon} xs={1}>
                  <Icon
                    id={icon}
                    size={args.size}
                    fill={args.fill}
                    stroke={args.stroke}
                    aria-hidden="true"
                    focusable={false}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>

          <Stack spacing="sm">
            <Typography size="body-lg" weight={600}>
              Media Icons
            </Typography>
            <Grid gridTemplateColumns="repeat(var(--connect__icon-size), 1fr))" gap="sm">
              {mediaIcons.map((icon) => (
                <GridItem key={icon} xs={1}>
                  <Icon
                    id={icon}
                    size={args.size}
                    fill={args.fill}
                    stroke={args.stroke}
                    aria-hidden="true"
                    focusable={false}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>

          <Stack spacing="sm">
            <Typography size="body-lg" weight={600}>
              Program Categories
            </Typography>
            <Grid gridTemplateColumns="repeat(var(--connect__icon-size), 1fr))" gap="sm">
              {programCategoryIcons.map((icon) => (
                <GridItem key={icon} xs={1}>
                  <Icon
                    id={icon}
                    size={args.size}
                    fill={args.fill}
                    stroke={args.stroke}
                    aria-hidden="true"
                    focusable={false}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>

          <Stack spacing="sm">
            <Typography size="body-lg" weight={600}>
              Miscellaneous Icons
            </Typography>
            <Grid gridTemplateColumns="repeat(var(--connect__icon-size), 1fr))" gap="sm">
              {miscIcons.map((icon) => (
                <GridItem key={icon} xs={1}>
                  <Icon
                    id={icon}
                    size={args.size}
                    fill={args.fill}
                    stroke={args.stroke}
                    aria-hidden="true"
                    focusable={false}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </div>
    </ConnectTheme>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  fill: undefined,
  stroke: undefined,
  focusable: false,
  className: '',
  gradeBand: GradeBand.G4_5,
};
