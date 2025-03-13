import React, { useEffect, useState } from 'react';
import { IconId } from '../../utils/icon-list';
import { GradeBand } from 'src/enum/gradeband';
import spriteSheet from '../../assets/icons/sprite.svg';

export type IconProps = {
  id: IconId;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'unset';
  fill?: string | undefined;
  stroke?: string | undefined;
  opacity?: number | undefined;
  focusable?: boolean;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Icon: React.FC<IconProps> = ({
  id = 'add',
  size = 'md',
  fill,
  stroke,
  opacity = 1,
  focusable = false,
  className,
  dataTestId,
}) => {
  const [symbolContent, setSymbolContent] = useState<string>('');

  useEffect(() => {
    if (!id) {
      return;
    }

    const loadIcon = async () => {
      try {
        const response = await fetch(spriteSheet);
        if (!response.ok) throw new Error(`Failed to load SVG: ${response.statusText}`);
        const svgContent = await response.text();

        const parser = new DOMParser();
        const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
        const symbol = svgDocument.getElementById(id);

        if (symbol) {
          const appendedSymbol = symbol.outerHTML.replace(`id="${id}"`, `id="${id}-icon"`);
          setSymbolContent(appendedSymbol);
        } else {
          // eslint-disable-next-line no-console
          console.warn(`Symbol with id "${id}" not found in the spritesheet.`);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    loadIcon();
  }, [spriteSheet, id]);

  if (!id) {
    return null;
  }

  return (
    <svg
      className={`connect__icon connect__icon-${size} ${className ? className : ''}`}
      style={
        {
          '--connect__icon-fill-color': fill || 'currentColor',
          '--connect__icon-stroke-color': stroke || 'currentColor',
          '--connect__icon-opacity': `${opacity}`,
        } as React.CSSProperties
      }
      aria-hidden="true"
      focusable={focusable}
      data-testid={dataTestId}
    >
      {symbolContent && <g dangerouslySetInnerHTML={{ __html: symbolContent }} />}
      <use href={`#${id}-icon`} />
    </svg>
  );
};
