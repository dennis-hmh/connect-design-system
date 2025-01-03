import React from 'react';

type GapSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = {
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  alignContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
};

export type GridProps = {
  children: React.ReactNode;
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
  gap?: GapSizes;
  gutter?: boolean;
  className?: string;
  style?: string;
  dataTestId?: string;
  tabIndex?: number;
};

const generateBreakpointStyles = (
  breakpoint: string,
  values: BreakpointValues,
  previousValues: BreakpointValues,
) => {
  const alignContent = values.alignContent ?? previousValues.alignContent ?? 'start';
  const alignItems = values.alignItems ?? previousValues.alignItems ?? 'stretch';
  const justifyContent = values.justifyContent ?? previousValues.justifyContent ?? 'start';
  const justifyItems = values.justifyItems ?? previousValues.justifyItems ?? 'stretch';

  return {
    [`--connect__${breakpoint}-alignContent`]: alignContent,
    [`--connect__${breakpoint}-alignItems`]: alignItems,
    [`--connect__${breakpoint}-justifyContent`]: justifyContent,
    [`--connect__${breakpoint}-justifyItems`]: justifyItems,
  };
};

export const Grid: React.FC<GridProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  gap,
  gutter,
  className,
  dataTestId,
  tabIndex,
}) => {
  const style: React.CSSProperties = {};
  const breakpoints = { xs, sm, md, lg, xl };
  let previousBreakpoint: BreakpointValues = {};

  // Add dynamic styles for breakpoints
  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      Object.assign(style, generateBreakpointStyles(breakpoint, values, previousBreakpoint));
      previousBreakpoint = { ...previousBreakpoint, ...values };
    }
  });

  const gapSizes: { [key in GapSizes]: string } = {
    none: 'var(--connect__spacer-zero)',
    xs: 'var(--connect__spacer-xs)',
    sm: 'var(--connect__spacer-sm)',
    md: 'var(--connect__spacer-md)',
    lg: 'var(--connect__spacer-lg)',
    xl: 'var(--connect__spacer-xl)',
  };

  const gridGap = gap ? gapSizes[gap] : 'var(--connect__grid-gap)';
  const combinedStyle = { ...style, gap: gridGap };

  // Combine classes
  const additionalClassName = gutter ? 'connect__grid-gutter' : '';
  const breakpointClasses = Object.keys(breakpoints)
    .filter((bp) => breakpoints[bp as keyof typeof breakpoints])
    .map((bp) => `connect__grid-${bp}`)
    .join(' ');

  return (
    <section
      className={`connect__grid ${className || ''} ${breakpointClasses} ${additionalClassName}`}
      style={combinedStyle}
      data-testid={dataTestId}
      tabIndex={tabIndex}
    >
      {children}
    </section>
  );
};
