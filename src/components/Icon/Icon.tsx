import React, { useEffect, useState } from 'react';
import { Color } from '../../utils/colors';
import { IconId } from '../../utils/icon-list';
import { GradeBand } from 'src/enum/gradeband';
// import sprite from '/dist/svg/sprite.svg';
// import sprite from '/public/svg/sprite.svg';
import spriteSheet from '../../assets/icons/sprite.svg'

export type IconProps = {
  id: IconId;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'unset';
  fill?: Color | undefined;
  stroke?: Color | undefined;
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

  const [symbolContent, setSymbolContent] = useState('');

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const response = await fetch(spriteSheet);
        if (!response.ok) throw new Error(`Failed to load SVG: ${response.statusText}`);
        const svgContent = await response.text();

        // Parse the SVG content and extract the desired symbol
        const parser = new DOMParser();
        const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
        const symbol = svgDocument.getElementById(id);

        if (symbol) {
          setSymbolContent(symbol.outerHTML);
        } else {
          console.warn(`Symbol with id "${id}" not found in the spritesheet.`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadIcon();
  }, [spriteSheet, id]);


    
  const fillColorVariable = fill ? `--connect__${fill}` : '';
  const strokeColorVariable = fill ? `--connect__${stroke}` : '';

  // const spriteUrl =
  //   import.meta.env.PROD === true && import.meta.env.VITE_ENV !== 'chromatic'
  //     ? '/node_modules/@connect/connect-design-system/dist/svg/sprite.svg'
  //     : '/svg/sprite.svg';

      return (
        <svg
          className={`connect__icon connect__icon-${size} ${className}`}
          style={
            {
              '--connect__icon-fill-color': `var(${fillColorVariable})`,
              '--connect__icon-stroke-color': `var(${strokeColorVariable})`,
              '--connect__icon-opacity': `${opacity}`,
            } as React.CSSProperties
          }
          aria-hidden="true"
          focusable={focusable}
          data-testid={dataTestId}
        >
          {symbolContent && (
            <g
              dangerouslySetInnerHTML={{ __html: symbolContent }}
            />
          )}
          <use href={`#${id}`} />
        </svg>
      );
    };
    