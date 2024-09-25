import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { Color } from 'src/utils/colors';

export interface FooterProps {
  children: React.ReactNode;
  footerBreakoutColor?: Color;
  footerPosition?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  footerPositionTop?: string;
  footerHeight?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  footerWidth?: string | number;
  footerBreakoutLeft?: string | number;
  footerBreakoutWidth?: string | number;
  footerPaddingTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  footerPaddingRight?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  footerPaddingLeft?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  footerPaddingBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  footerMarginTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
}

export const Footer: React.FC<FooterProps> = ({
  children,
  footerBreakoutColor,
  footerPosition = 'relative',
  footerPositionTop,
  footerHeight,
  footerWidth,
  footerBreakoutLeft,
  footerBreakoutWidth,
  footerPaddingTop,
  footerPaddingRight,
  footerPaddingLeft,
  footerPaddingBottom,
  footerMarginTop = 'xxl',
  className = 'connect__grid',
  dataTestId,
}) => {
  const footerProps: React.CSSProperties = {};

  const footerStyleMappings: { [key: string]: any } = {
    '--theme__footer-breakout-bg': footerBreakoutColor && `var(--connect__${footerBreakoutColor})`,
    '--theme__footer-position': footerPosition,
    '--theme__footer-position-t': footerPositionTop,
    '--theme__footer-h': footerHeight && `var(--connect__spacer-${footerHeight})`,
    '--theme__footer-w': footerWidth,
    '--theme__footer-breakout-l': footerBreakoutLeft,
    '--theme__footer-breakout-w': footerBreakoutWidth,
    '--theme__footer-padding-t': footerPaddingTop && `var(--connect__spacer-${footerPaddingTop})`,
    '--theme__footer-padding-r':
      footerPaddingRight && `var(--connect__spacer-${footerPaddingRight})`,
    '--theme__footer-padding-l': footerPaddingLeft && `var(--connect__spacer-${footerPaddingLeft})`,
    '--theme__footer-padding-b':
      footerPaddingBottom && `var(--connect__spacer-${footerPaddingBottom})`,
    '--theme__footer-margin-t': footerMarginTop && `var(--connect__spacer-${footerMarginTop})`,
  };

  Object.entries(footerStyleMappings).forEach(([key, value]) => {
    if (value) {
      footerProps[key] = value;
    }
  });

  return (
    <footer className={`connect__footer ${className}`} data-testid={dataTestId} style={footerProps}>
      {children}
    </footer>
  );
};
