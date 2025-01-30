import React, { useRef } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Icon, IconProps } from './Icon';
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

const iconIds = [
  'add',
  'arrowDown',
  'arrowUp',
  'check',
  'close',
  'collapse',
  'collapseLeftOutline',
  'color',
  'commonError',
  'counter',
  'desmos',
  'drawSizeLg',
  'drawSizeMd',
  'drawSizeXs',
  'drawToolOutline',
  'expand',
  'expandRightOutline',
  'flag',
  'gotIt', // This icon is missing
  'groupActivity',
  'groupActivityVariant',
  'info',
  'lineArrow',
  'lineDashed',
  'lineSolid',
  'loader',
  'mic',
  'ml',
  'pause',
  'play',
  'reduce',
  'redo',
  'renew',
  'shapes',
  'shapesCircleOutline',
  'shapesCircleSolid',
  'shapesRectangleOutline',
  'shapesRectangleSolid',
  'shapesTriangleOutline',
  'shapesTriangleSolid',
  'soundMeter',
  'specialShapesHexagon',
  'specialShapesPentagon',
  'stampsCounterOutline',
  'stampsMeasureOutline',
  'stampsSpecialShapesOutline',
  'stop',
  'stopwatch',
  'studentPicker',
  'syl',
  'timer',
  'udl',
  'undo',
];

const Template: StoryFn<IconProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {iconIds.map((id) => (
          <div key={id} style={{ textAlign: 'center' }}>
            <Icon {...args} id={id as IconId} aria-hidden="true" focusable={false} />
          </div>
        ))}
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
