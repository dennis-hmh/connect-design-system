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
  textWrap?: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
  textAlign?: React.CSSProperties['textAlign'];
  textTransform?: React.CSSProperties['textTransform'];
  textOverflow?: 'clip' | 'ellipsis';
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
  textWrap,
  opacity,
  className = '',
  dataTestId,
  ariaLive,
  textOverflow,
}) => {
  const typoProps: React.CSSProperties = {
    color: color ? `var(--connect__${color})` : undefined,
    fontFamily: `var(--connect__font-${family})`,
    letterSpacing: letterSpacing ? `var(--connect__spacer-${letterSpacing})` : undefined,
    fontStyle: style,
    fontWeight: weight ? `var(--connect__fw, ${weight})` : undefined,
    textAlign,
    textTransform,
    opacity,
    textWrap,
    ...(textOverflow
      ? {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: textOverflow || 'clip',
        }
      : {}),
  };

  if (textWrap) {
    typoProps.textWrap = textWrap;
  }

  if (size) {
    typoProps.fontSize = `var(--connect__${size})`;
    typoProps.lineHeight = `var(--connect__${size}-lheight)`;
    const spacerSizeToUse = spacerSize || size;
    if (spacer) {
      typoProps.marginBottom = `var(--connect__${spacerSizeToUse}-spacer)`;
    }
  }

  return (
    <Component
      style={Object.keys(typoProps).length ? typoProps : undefined}
      id={id}
      className={`connect__typography ${className}`}
      data-testid={dataTestId}
      aria-live={ariaLive}
    >
      {children}
    </Component>
  );
};
