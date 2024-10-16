import React, { useRef } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Icon, IconProps } from './Icon';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { IconId } from '../../utils/icon-list';

const meta: Meta<typeof Icon> = {
  title: 'Icons-Typo/Icons',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const iconIds = [
  'loader',
  'arrowDown',
  'arrowUp',
  'mic',
  'pause',
  'play',
  'color',
  'counter',
  'drawToolOutline',
  'drawSizeXs',
  'drawSizeLg',
  'drawSizeMd',
  'lineArrow',
  'lineDashed',
  'lineSolid',
  'redo',
  'undo',
  'shapesCircleOutline',
  'shapesCircleSolid',
  'shapes',
  'shapesRectangleOutline',
  'shapesRectangleSolid',
  'shapesTriangleSolid',
  'shapesTriangleOutline',
  'specialShapesDiamond',
  'specialShapesPentagon',
  'stampsCounterOutline',
  'stampsMeasureOutline',
  'stampsSpecialShapesOutline',
  'add',
  'check',
  'close',
  'collapse',
  'desmos',
  'expand',
  'flag',
  'groupActivity',
  'groupActivityVariant',
  'info',
  'reduce',
  'renew',
  'soundMeter',
  'stop',
  'stopwatch',
  'studentPicker',
  'timer',
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
