import React from 'react';
import { Color } from '../../utils/colors';
import { GradeBand } from '../../enum/gradeband';

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

export interface TypographyProps {
  children: React.ReactNode;
  id?: string;
  element?: React.ElementType;
  color?: Color;
  family?: 'sans' | 'serif' | 'mono';
  size?: Size;
  spacer?: boolean;
  spacerSize?: Size | undefined;
  style?: 'normal' | 'italic' | 'oblique';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  letterSpacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  textAlign?: React.CSSProperties['textAlign'];
  textTransform?: React.CSSProperties['textTransform'];
  opacity?: React.CSSProperties['opacity'];
  className?: string;
  dataTestId?: string;
  ariaLive?: 'polite' | 'assertive' | 'off';
  gradeBand?: GradeBand;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  id,
  element: Component = 'span',
  color,
  family = 'sans',
  size,
  spacer,
  spacerSize,
  style = 'normal',
  weight,
  letterSpacing,
  textAlign,
  textTransform,
  opacity,
  className,
  dataTestId,
  ariaLive,
}) => {
  const typoProps: React.CSSProperties = {};

  if (color) {
    const colorVariable = `--connect__${color}`;
    typoProps.color = `var(${colorVariable})`;
  }

  if (family) {
    typoProps.fontFamily = `var(--connect__font-${family})`;
  }
  if (letterSpacing) {
    typoProps.letterSpacing = `var(--connect__spacer-${letterSpacing})`;
  }
  if (style) typoProps.fontStyle = style;
  if (weight) {
    const weightVariable = `--connect__fw`;
    typoProps.fontWeight = `var(${weightVariable}, ${weight})`;
  }
  if (textAlign) typoProps.textAlign = textAlign;
  if (textTransform) typoProps.textTransform = textTransform;
  if (opacity) typoProps.opacity = opacity;
  if (size) {
    typoProps.fontSize = `var(--connect__${size})`;
    typoProps.lineHeight = `var(--connect__${size}-lheight)`;
    if (spacer && !spacerSize) {
      typoProps.marginBottom = `var(--connect__${size}-spacer)`;
      // typoProps.marginTop = `var(--connect__${size}-spacer)`;
    }
  }
  if (spacer && spacerSize) {
    typoProps.marginBottom = `var(--connect__${spacerSize}-spacer)`;
    // typoProps.marginTop = `var(--connect__${spacerSize}-spacer)`;
  }

  return (
    <Component
      {...(Object.keys(typoProps).length > 0 ? { style: typoProps } : {})}
      id={id}
      className={className}
      data-testid={dataTestId}
      aria-live={ariaLive}
    >
      {children}
    </Component>
  );
};
