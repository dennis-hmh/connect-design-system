import React from 'react';
import { Color } from '../../utils/colors';
import { IconId } from '../../utils/icon-list';
import { GradeBand } from 'src/enum/gradeband';
// import sprite from '/dist/svg/sprite.svg';
// import sprite from '/public/svg/sprite.svg';

export type IconProps = {
  id: IconId;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color | undefined;
  stroke?: Color | undefined;
  opacity?: React.CSSProperties['opacity'];
  focusable?: boolean;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Icon: React.FC<IconProps> = ({
  id,
  size,
  fill,
  stroke,
  opacity,
  focusable = false,
  className,
  dataTestId,
}) => {
  const fillColorVariable = fill ? `--connect__${fill}` : '';
  const strokeColorVariable = fill ? `--connect__${stroke}` : '';

  const spriteUrl =
    import.meta.env.PROD === true && import.meta.env.VITE_ENV === 'build'
      ? '/node_modules/@connect/connect-design-system/dist/svg/sprite.svg'
      : '/svg/sprite.svg';

  // const spriteUrl = `/node_modules/@connect/connect-design-system/dist/svg/sprite.svg`;

  // console.log('VITE_ENV: "build"', import.meta.env.VITE_ENV === 'build');
  // console.log('VITE_ENV: "chromatic"', import.meta.env.VITE_ENV === 'chromatic');
  // console.log('PROD:', import.meta.env.PROD);

  return (
    <svg
      className={`connect__icon connect__icon-${size} ${className}`}
      style={
        {
          '--connect__icon-fill-color': `var(${fillColorVariable})`,
          '--connect__icon-stroke-color': `var(${strokeColorVariable})`,
        } as React.CSSProperties
      }
      aria-hidden="true"
      focusable={focusable}
      data-testid={dataTestId}
      opacity={opacity}
    >
      <use
        // xlinkHref={`dist/svg/sprite.svg#${id}`}
        // href={`dist/svg/sprite.svg#${id}`}

        xlinkHref={`${spriteUrl}#${id}`}
        href={`${spriteUrl}#${id}`}

        // xlinkHref={`${staticSprite}#${id}`}
        // href={`${staticSprite}#${id}`}
      />
    </svg>
  );
};
