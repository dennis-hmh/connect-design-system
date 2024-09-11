import React from 'react';
import { Color } from '../../utils/colors';
import { IconId } from '../../utils/icon-list';
import { GradeBand } from 'src/enum/gradeband';

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

  return (
    <svg
      className={`connect__icon connect__icon-${size} ${className}`}
      style={
        {
          '--connect__icon-fill-color': `var(${fillColorVariable})`,
          '--connect__icon-stroke-color': `var(${strokeColorVariable})`,
        } as React.CSSProperties & { [key: string]: string | undefined }
      }
      aria-hidden="true"
      focusable={focusable}
      data-testid={dataTestId}
      opacity={opacity}
    >
      <use
        // xlinkHref={`src/assets/icons/sprite.svg#${id}`}
        // href={`src/assets/icons/sprite.svg#${id}`}

        xlinkHref={`../svg/sprite.svg#${id}`}
        href={`../svg/sprite.svg#${id}`}
      />
    </svg>
  );
};
