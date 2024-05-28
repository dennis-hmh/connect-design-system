import React from 'react';

type IconProps = {
  id: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: string;
  stroke?: string;
  focusable?: boolean;
};

const Icon: React.FC<IconProps> = ({ id, size, fill, stroke, focusable = false }) => {
  const fillColorVariable = fill ? `--connect__${fill}` : '--connect__white';
  const strokeColorVariable = fill ? `--connect__${stroke}` : '';

  return (
    // Added return statement
    <svg
      className={`connect__icon connect__icon-${size}`}
      style={
        {
          '--connect__icon-fill-color': `var(${fillColorVariable})`,
          '--connect__icon-stroke-color': `var(${strokeColorVariable})`,
        } as React.CSSProperties & { [key: string]: string | undefined }
      }
      aria-hidden="true"
      focusable={focusable}
    >
      <use
        xlinkHref={`src/assets/icons/sprite.svg#${id}`}
        href={`src/assets/icons/sprite.svg#${id}`}
      />
    </svg>
  );
};

export default Icon;
