import React, { ReactNode, ElementType } from 'react';
import { Color } from '../utils/color';

type Size =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'caption'
  | 'credits';

interface TypographyProps {
  children: ReactNode;
  component?: ElementType;
  color?: Color;
  family?: 'default' | 'secondary';
  size?: Size;
  style?: React.CSSProperties['fontStyle'];
  weight?: number;
  letterSpacing?: 'normal' | 'wide';
  textAlign?: React.CSSProperties['textAlign'];
  textTransform?: React.CSSProperties['textTransform'];
  className?: string;
  dataTestId?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  component: Component = 'span',
  color,
  family,
  size,
  style,
  weight,
  letterSpacing,
  textAlign,
  textTransform,
  className,
  dataTestId,
}) => {
  const styleProps: React.CSSProperties = {};

  if (color) {
    const colorVariable = `--connect__${color}`;
    styleProps.color = `var(${colorVariable})`;
  }

  if (family) {
    styleProps.fontFamily = `var(--font-family-${family})`;
  }
  if (letterSpacing) {
    styleProps.letterSpacing = `var(--letter-spacing-${letterSpacing})`;
  }
  if (style) styleProps.fontStyle = style;
  if (weight) styleProps.fontWeight = weight;
  if (textAlign) styleProps.textAlign = textAlign;
  if (textTransform) styleProps.textTransform = textTransform;
  if (size) {
    styleProps.fontSize = `var(--connect-${size})`;
    styleProps.lineHeight = `var(--connect-${size}-lheight)`;
  }

  // Only add the style attribute if styleProps is not empty
  const hasStyles = Object.keys(styleProps).length > 0;

  return (
    <Component
      {...(hasStyles ? { style: styleProps } : {})}
      className={className}
      data-test={dataTestId}
    >
      {children}
    </Component>
  );
};

export default Typography;
