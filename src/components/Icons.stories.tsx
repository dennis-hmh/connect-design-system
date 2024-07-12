import React, { useState, useEffect, useMemo, ChangeEvent } from 'react';
import Grid from './Grid';
import GridItem from './GridItem';
import Typography from './Typography';
import Stack from './Stack';
import Icon from './Icon'; // Ensure this is the correct import
import { IconId } from '../utils/icon-list';
import { Color, ColorBase, ColorShade } from '../utils/colors';

type ColorOption = {
  name: string;
  value: string;
};

type ColorGroup = {
  base: ColorBase;
  colors: ColorOption[];
};

const generateColors = (): ColorGroup[] => {
  const bases: ColorBase[] = [
    'yellow',
    'golden',
    'orange',
    'red',
    'cerise',
    'purple',
    'blue',
    'aqua',
    'turquoise',
    'green',
    'apple',
    'gray',
    'cool-gray',
    'warm-gray',
  ];
  const shades: ColorShade[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
  const modifiers = ['c', 'm', 's'];

  return bases.map((base) => ({
    base,
    colors: shades.flatMap((shade) =>
      modifiers.map((modifier) => ({
        name: `${base}-${modifier}${shade}`,
        value: `${base}-${modifier}${shade}`,
      })),
    ),
  }));
};

const colors = generateColors();

interface IconFilterProps {
  onFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const IconFilter: React.FC<IconFilterProps> = ({ onFilterChange, onCategoryChange }) => (
  <Stack xs={{ alignItems: 'center', direction: 'row', spacing: 'lg' }}>
    <Stack xs={{ direction: 'column', alignItems: 'start', spacing: 'xs' }}>
      <Typography element="p" size="caption">
        Search icons
      </Typography>
      <input
        type="search"
        placeholder="Search icons..."
        className="connect__input"
        onChange={onFilterChange}
        aria-label="Search icons"
      />
    </Stack>
    <Stack xs={{ direction: 'column', alignItems: 'start', spacing: 'xs' }}>
      <Typography element="p" size="caption">
        Category
      </Typography>
      <select className="connect__select" onChange={onCategoryChange}>
        <option value="">All Categories</option>
        {Object.keys(iconCategories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </Stack>
  </Stack>
);

export const Icons: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [iconSize, setIconSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>('lg');
  const [fillColor, setFillColor] = useState<Color | undefined>(undefined);
  const [strokeColor, setStrokeColor] = useState<Color | undefined>(undefined);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--connect__icon-size',
      `var(--connect__icon-${iconSize})`,
    );
  }, [iconSize]);

  const filteredIcons = useMemo(() => {
    const filteredByCategory = category ? iconCategories[category] : iconIds;
    return filteredByCategory.filter((id) => id.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, category]);

  return (
    <>
      <Grid gutter={false} gap="lg">
        <GridItem xs={{ startCol: 1, spanCol: 13 }}>
          <IconFilter
            onFilterChange={(e) => setFilter(e.target.value)}
            onCategoryChange={(e) => setCategory(e.target.value)}
          />
        </GridItem>
        <GridItem lg={{ startCol: 1, spanCol: 4 }}>
          <Stack xs={{ direction: 'column', alignItems: 'start', spacing: 'xs' }}>
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
          <Stack xs={{ direction: 'column', alignItems: 'start', spacing: 'xs' }}>
            <Typography element="p" size="caption">
              Fill Colour
            </Typography>
            <select
              className="connect__select"
              onChange={(e) => setFillColor(e.target.value as Color | undefined)}
            >
              <option value="none">Default</option>
              <hr />
              {colors.map((group, index) => (
                <optgroup key={index} label={group.base}>
                  <hr />
                  {group.colors.map((color) => (
                    <option key={color.name} value={color.value}>
                      {color.name}
                    </option>
                  ))}
                  <hr />
                </optgroup>
              ))}
            </select>
          </Stack>
        </GridItem>
        <GridItem lg={{ startCol: 9, spanCol: 4 }}>
          <Stack xs={{ direction: 'column', alignItems: 'start', spacing: 'xs' }}>
            <Typography element="p" size="caption">
              Stroke Colour
            </Typography>
            <select
              className="connect__select"
              onChange={(e) => setStrokeColor(e.target.value as Color | undefined)}
            >
              <option value="none">Default</option>
              <hr />
              {colors.map((group, index) => (
                <optgroup key={index} label={group.base}>
                  {group.colors.map((color) => (
                    <option key={color.name} value={color.value}>
                      {color.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </Stack>
        </GridItem>
      </Grid>
      <Grid gutter={false} gap="lg">
        {Object.entries(iconCategories).map(([cat, icons]) => {
          const filteredCategoryIcons = icons.filter((id) => filteredIcons.includes(id));
          if (filteredCategoryIcons.length > 0) {
            return (
              <GridItem xs={{ startCol: 1, spanCol: 12 }} key={cat}>
                <Stack xs={{ alignItems: 'start', direction: 'column', spacing: 'sm' }}>
                  <Typography element="h3" size="heading-sm">
                    {cat}
                  </Typography>
                  <Stack
                    xs={{
                      alignItems: 'center',
                      direction: 'row',
                      spacing: 'xl',
                      justifyContent: 'start',
                    }}
                  >
                    {filteredCategoryIcons.map((id) => (
                      <Stack
                        key={id}
                        xs={{
                          alignItems: 'center',
                          justifyContent: 'start',
                          direction: 'row',
                          spacing: 'xs',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Icon
                          id={id as IconId}
                          size={iconSize}
                          fill={fillColor}
                          stroke={strokeColor}
                          aria-hidden="true"
                          focusable={false}
                        />
                        <Typography element="p" size="caption">
                          {id}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </GridItem>
            );
          }
          return null;
        })}
      </Grid>
    </>
  );
};

export default {
  component: Icons,
  title: 'Icons',
  tags: ['autodocs'],
};

const iconSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

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
  'circle-cross',
  'circle-tick',
  'closed-captioning',
  'correct-six-twelve',
  'cross-xs',
  'delete',
  'download',
  'erase',
  'flip',
  'glyphs',
  'help',
  'incorrect-six-twelve',
  'info',
  'italic',
  'light-bulb',
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
  'star',
  'star-outline',
  'text-label',
  'tick',
  'tick-xs',
  'transcript',
  'underline',
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
  'pencil',
  'text',
  'print',
  'calendar',
  'menu-grid',
  'image',
  'clock',
  'counter-one',
  'draw-outline',
  'draw-size-one',
  'draw-size-three',
  'draw-size-two',
  'line-arrow',
  'line-dashed',
  'line-line',
  'lines-outline',
  'placeholder',
  'redo',
  'shapes-circle-outline',
  'shapes-circle',
  'shapes-outline',
  'shapes-rectangle-outline',
  'shapes-rectangle',
  'shapes-triangle-outline',
  'special-shapes-one',
  'shapes-triangle',
  'special-shapes-three',
  'special-shapes-two',
  'stamps-counter-outline',
  'stamps-measures-outline',
  'stamps-special-shapes-outline',
];

const iconCategories = {
  Action: [
    'add',
    'delete',
    'download',
    'save',
    'save-as',
    'upload',
    'open',
    'redo',
    'undo',
    'change',
    'move',
    'flip',
    'erase',
    'settings',
  ],
  Media: [
    'play',
    'pause',
    'audio-play',
    'audio-pause',
    'audio-next',
    'audio-previous',
    'audio-replay',
    'video-clip',
    'volume-high',
    'volume-low',
    'volume-mid',
    'volume-mute',
  ],
  Typography: [
    'bold',
    'color',
    'italic',
    'underline',
    'text-label',
    'align-left',
    'align-center',
    'align-right',
  ],
  Shapes: [
    'shapes-circle-outline',
    'shapes-circle',
    'shapes-outline',
    'shapes-rectangle-outline',
    'shapes-rectangle',
    'shapes-triangle-outline',
    'special-shapes-one',
    'shapes-triangle',
    'special-shapes-three',
    'special-shapes-two',
  ],
  Lines: ['line-arrow', 'line-dashed', 'line'],
  Stamps: ['stamps-counter-outline', 'stamps-measures-outline', 'stamps-special-shapes-outline'],
  Miscellaneous: ['info', 'help', 'pdf', 'print', 'calendar', 'clock', 'image'],
  Feedback: [
    'tick',
    'tick-xs',
    'cross-xs',
    'correct',
    'incorrect',
    'shown-correct',
    'correct-six-twelve',
    'incorrect-six-twelve',
    'shown-correct-six-twelve',
  ],
  Navigation: [
    'arrow-up',
    'arrow-down',
    'arrow-left',
    'arrow-right',
    'arrow-left-dbl',
    'arrow-right-dbl',
    'maximize',
    'minimize',
    'more-horiz',
    'more-vert',
  ],
  Outline: ['star-outline', 'light-bulb'],
  Toolbar: [
    'counter-one',
    'draw-outline',
    'draw-size-one',
    'draw-size-three',
    'draw-size-two',
    'line-arrow',
    'line-dashed',
    'line',
    'lines-outline',
    'placeholder',
    'redo',
    'shapes-circle-outline',
    'shapes-circle',
    'shapes-outline',
    'shapes-rectangle-outline',
    'shapes-rectangle',
    'shapes-triangle-outline',
    'special-shapes-one',
    'shapes-triangle',
    'special-shapes-three',
    'special-shapes-two',
    'stamps-counter-outline',
    'stamps-measures-outline',
    'stamps-special-shapes-outline',
  ],
  Lists: ['list-bullet', 'list-number'],
};
