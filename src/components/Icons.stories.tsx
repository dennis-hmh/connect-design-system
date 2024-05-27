import React, { useState, useEffect, useMemo, ChangeEvent } from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import Typography from './Typography';
import Stack from './Stack';

interface SVGIconProps {
  id: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: string;
  stroke?: string;
  focusable?: 'true' | 'false' | 'auto';
}

const SVGIcon: React.FC<SVGIconProps> = ({ id, size, fill, stroke, focusable }) => (
  <svg
    className={`connect__icon connect__icon-${size}`}
    style={{
      width: 'var(--connect__icon-size)',
      height: 'var(--connect__icon-size)',
      fill: fill ? `var(${fill})` : undefined,
      stroke: stroke ? `var(${stroke})` : undefined,
    }}
    aria-hidden="true"
    focusable={focusable}
  >
    <use
      xlinkHref={`src/assets/icons/sprite.svg#${id}`}
      href={`src/assets/icons/sprite.svg#${id}`}
    />
  </svg>
);

const iconSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const colors = [
  { name: 'black', value: '#2d2d2d' },
  { name: 'red', value: '#FE251D' },
  { name: 'yellow', value: '#FECE00' },
  { name: 'green', value: '#59A516' },
  { name: 'blue', value: '#3495DB' },
  { name: 'cerise', value: '#FF2EAB' },
];

interface IconFilterProps {
  onFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const IconFilter: React.FC<IconFilterProps> = ({ onFilterChange }) => (
  <Stack xs={{ alignItems: 'center', direction: 'row', spacing: 'lg' }}>
    <input
      type="search"
      placeholder="Search icons..."
      className="connect__input"
      onChange={onFilterChange}
      style={{ margin: '10px', flex: '1' }}
      aria-label="Search icons"
    />
  </Stack>
);

export const Icons: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [iconSize, setIconSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>('lg');
  const [fillColor, setFillColor] = useState<string>('');
  const [strokeColor, setStrokeColor] = useState<string>('');

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--connect__icon-size',
      `var(--connect__icon-${iconSize})`,
    );
    document.documentElement.style.setProperty('--connect__icon-fill-color', fillColor);
    document.documentElement.style.setProperty('--connect__icon-stroke-color', strokeColor);
  }, [iconSize, fillColor, strokeColor]);

  const filteredIcons = useMemo(
    () => iconIds.filter((id) => id.toLowerCase().includes(filter.toLowerCase())),
    [filter],
  );

  return (
    <Grid gutter={true} gap="lg">
      <GridItem md={{ startCol: 3, spanCol: 7 }}>
        <IconFilter onFilterChange={(e) => setFilter(e.target.value)} />
      </GridItem>
      <GridItem lg={{ startCol: 1, spanCol: 4 }}>
        <Stack lg={{ alignItems: 'center', direction: 'row', spacing: 'lg' }}>
          <Typography element="p" size="caption">
            Size
          </Typography>
          <select
            className="connect__select"
            onChange={(e) =>
              setIconSize(e.target.value as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl')
            }
          >
            {iconSizes.map((size) => (
              <option key={size} value={size}>
                {size.toUpperCase()}
              </option>
            ))}
          </select>
        </Stack>
      </GridItem>
      <GridItem lg={{ startCol: 5, spanCol: 4 }}>
        <Stack lg={{ alignItems: 'center', direction: 'row', spacing: 'lg' }}>
          <Typography element="p" size="caption">
            Fill Colour
          </Typography>
          <select className="connect__select" onChange={(e) => setFillColor(e.target.value)}>
            {colors.map((color) => (
              <option key={color.name} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
        </Stack>
      </GridItem>
      <GridItem lg={{ startCol: 9, spanCol: 4 }}>
        <Stack lg={{ alignItems: 'center', direction: 'row', spacing: 'lg' }}>
          <Typography element="p" size="caption">
            Stroke Colour
          </Typography>
          <select className="connect__select" onChange={(e) => setStrokeColor(e.target.value)}>
            {colors.map((color) => (
              <option key={color.name} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
        </Stack>
      </GridItem>
      <GridItem xs={{ startCol: 1, spanCol: 12 }}>
        <Stack xs={{ alignItems: 'center', direction: 'row', spacing: 'xl' }}>
          {filteredIcons.map((id) => (
            <Stack key={id} xs={{ alignItems: 'center', direction: 'row', spacing: 'xs' }}>
              <SVGIcon
                id={id}
                size={iconSize as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
                fill={fillColor}
                stroke={strokeColor}
                aria-hidden="true"
                focusable="false"
              />
              <Typography element="p" size="caption">
                {id}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default {
  title: 'Icons',
  component: Icons,
};

// List of icon IDs from your sprite.svg
const iconIds = [
  'add',
  'align-center',
  'align-left',
  'align-right',
  'arrow-down',
  'arrow-left',
  'arrow-left-dbl',
  'arrow-right',
  'arrow-right-dbl',
  'arrow-up',
  'audio-description',
  'audio-next',
  'audio-pause',
  'audio-play',
  'audio-previous',
  'audio-replay',
  'bold',
  'change',
  'circle',
  'circle-cross',
  'circle-tick',
  'closed-captioning',
  'color',
  'color-palette',
  'correct-six-twelve',
  'cross-xs',
  'delete',
  'download',
  'draw',
  'erase',
  'flip',
  'glyphs',
  'help',
  'incorrect-six-twelve',
  'info',
  'italic',
  'light-bulb',
  'line',
  'line-arrows',
  'line-medium',
  'line-thick',
  'line-thickness',
  'line-thin',
  'list-bullet',
  'list-number',
  'maximize',
  'mic',
  'minimize',
  'more-horiz',
  'more-vert',
  'move',
  'open',
  'pause',
  'pdf',
  'play',
  'redo',
  'reload',
  'save',
  'save-as',
  'settings',
  'shown-correct-six-twelve',
  'size',
  'square',
  'stamp',
  'star',
  'text-label',
  'tick',
  'tick-xs',
  'transcript',
  'triangle',
  'triangle-down',
  'triangle-up',
  'underline',
  'undo',
  'upload',
  'video-clip',
  'vocabulary',
  'volume-high',
  'volume-low',
  'volume-mid',
  'volume-mute',
  'correct',
  'incorrect',
  'shown-correct',
  'Frame9828',
  'Frame9769',
  'Frame9757',
  'Frame9919',
  'Frame9885',
  'Frame9773',
  'Frame9774',
  'Frame9826',
  'Frame9770',
  'Frame9775',
  'Frame9776',
  'shapes',
  'shapes-two',
  'shapes-three',
  'shapes-connector',
  'color-one',
  'color-nine',
  'line-dash',
  'pencil',
  'line-solid',
  'line-arrow',
  'text',
  'print',
  'calendar',
  'menu-grid',
  'stamp-one',
  'stamp-two',
  'stamp-three',
  'stamp-four',
  'stamp-five',
  'stamp-six',
  'stamp-seven',
  'stroke-one',
  'stroke-three',
  'stroke-two',
  'image',
  'clock',
  'circle-filled',
  'square-filled',
  'triangle-filled',
  'circle-outline',
  'triangle-outline',
  'square-outline',
  'star-outline',
];
