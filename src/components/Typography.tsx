import React from 'react';
import { Color } from '../utils/colors';

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
  children: React.ReactNode;
  element?: React.ElementType;
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
  element: Component = 'span',
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
  const typoProps: React.CSSProperties = {};

  if (color) {
    const colorVariable = `--connect__${color}`;
    typoProps.color = `var(${colorVariable})`;
  }

  if (family) {
    typoProps.fontFamily = `var(--font-family-${family})`;
  }
  if (letterSpacing) {
    typoProps.letterSpacing = `var(--letter-spacing-${letterSpacing})`;
  }
  if (style) typoProps.fontStyle = style;
  if (weight) typoProps.fontWeight = weight;
  if (textAlign) typoProps.textAlign = textAlign;
  if (textTransform) typoProps.textTransform = textTransform;
  if (size) {
    typoProps.fontSize = `var(--connect-${size})`;
    typoProps.lineHeight = `var(--connect-${size}-lheight)`;
  }

  // Only add the style attribute if typoProps is not empty
  const hasStyles = Object.keys(typoProps).length > 0;

  return (
    <Component
      {...(hasStyles ? { style: typoProps } : {})}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </Component>
  );
};

export default Typography;
