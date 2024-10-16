import React from 'react';
import { Typography } from '../Typography/Typography';
import { Icon } from './Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { List } from '../List/List'; // Import the List component

export const Icons: React.FC = () => {
  const iconSize = 'lg'; // Set a default size for all icons
  const fillColor: Color | undefined = undefined; // Set default fill color
  const strokeColor: Color | undefined = undefined; // Set default stroke color

  // Create data for the List component
  const iconData = iconIds.map((id) => ({
    content: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon
          id={id as IconId}
          size={iconSize}
          fill={fillColor}
          stroke={strokeColor}
          aria-hidden="true"
          focusable={false}
        />
        <Typography element="p" size="caption" style={{ marginLeft: '8px' }}>
          {id}
        </Typography>
      </div>
    ),
  }));

  return <List data={iconData} listType="unordered" />;
};

export default {
  title: 'Icons-Typo/Icons',
  component: Icons,
};

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
  'stampsCounterOutline',
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
  'pause',
  'play',
  'reduce',
  'renew',
  'soundMeter',
  'stop',
  'stopwatch',
  'studentPicker',
  'timer',
];
