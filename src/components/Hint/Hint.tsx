import React from 'react';
import { Typography, TypographyProps } from '../Typography/Typography';

// Open to discussion on the picks props, i picked just the one from the css

export type HintProps = {
  children: React.ReactNode;
  dataTestId?: string;
} & Pick<TypographyProps, 'color' | 'size' | 'style' | 'weight' | 'textOverflow'>;

export const Hint: React.FC<HintProps> = ({
  children,
  dataTestId,
  color = 'hint-mid',
  size = 'credits',
  style = 'italic',
  weight = 400,
  textOverflow = 'ellipsis',
  ...typographyProps
}) => {
  return (
    <Typography
      element="span"
      className="connect__hint"
      aria-hidden="true"
      dataTestId={dataTestId}
      color={color}
      size={size}
      style={style}
      weight={weight}
      textOverflow={textOverflow}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};
