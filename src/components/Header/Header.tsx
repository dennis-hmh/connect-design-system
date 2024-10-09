import React from 'react';
import { Color } from 'src/utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type HeaderProps = {
  children: React.ReactNode;
  borderWidth?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  borderColor?: Color;
  borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  headerBackgroundColor?: Color;
  headerBreakoutColor?: Color;
  headerBackgroundImage?: string;
  paddingTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  paddingBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  paddingLeft?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  paddingRight?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Header: React.FC<HeaderProps> = ({
  children,
  borderColor,
  borderWidth = 'none',
  borderRadius = 'none',
  headerBackgroundColor,
  headerBreakoutColor,
  headerBackgroundImage,
  paddingBottom = 'sm',
  paddingTop = 'sm',
  paddingLeft = 'sm',
  paddingRight = 'sm',
  className = 'connect__grid',
  dataTestId,
}) => {
  const headerProps: React.CSSProperties = {};

  const headerStyleMappings: { [key: string]: any } = {
    '--theme__connect-header-border-c': borderColor && `var(--connect__${borderColor})`,
    '--theme__connect-header-border-w': borderWidth && `var(--connect__spacer-${borderWidth})`,
    '--theme__connect-header-border-r': borderRadius && `var(--connect__spacer-${borderRadius})`,
    '--theme__connect-header-bg-color':
      headerBackgroundColor && `var(--connect__${headerBackgroundColor})`,
    '--theme__connect-header-breakout-bg':
      headerBreakoutColor && `var(--connect__${headerBreakoutColor})`,
    '--theme__connect-header-bg-image': headerBackgroundImage && `url(${headerBackgroundImage})`,
    '--theme__connect-header-padding-b': paddingBottom && `var(--connect__spacer-${paddingBottom})`,
    '--theme__connect-header-padding-t': paddingTop && `var(--connect__spacer-${paddingTop})`,
    '--theme__connect-header-padding-l': paddingLeft && `var(--connect__spacer-${paddingLeft})`,
    '--theme__connect-header-padding-r': paddingRight && `var(--connect__spacer-${paddingRight})`,
  };

  Object.entries(headerStyleMappings).forEach(([key, value]) => {
    if (value) {
      headerProps[key] = value;
    }
  });

  return (
    <header className={`connect__header ${className}`} data-testid={dataTestId} style={headerProps}>
      {children}
    </header>
  );
};
