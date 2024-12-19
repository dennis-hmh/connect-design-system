import React from 'react';

type GapSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = {
  justifyContent?: 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  alignContent?: 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
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
  tabIndex }) => {
  // Supported gaps are our spacer sizes
  const gapSizes: { [key in GapSizes]: string } = {
    xs: 'var(--connect__spacer-xs)',
    sm: 'var(--connect__spacer-sm)',
    md: 'var(--connect__spacer-md)',
    lg: 'var(--connect__spacer-lg)',
    xl: 'var(--connect__spacer-xl)',
  };

  const style: React.CSSProperties = {};
  const breakpoints = { xs, sm, md, lg, xl };
  let previousBreakpoint: BreakpointValues = {};

  // Construct a list of classes based on the breakpoints provided
  const breakpointClasses = Object.keys(breakpoints)
  .filter((bp) => breakpoints[bp as keyof typeof breakpoints])
  .map((bp) => `connect__grid-${bp}`)
  .join(' ');

  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      // Only apply a property if it is explicitly set or inherited from a previous breakpoint
      const alignContent = values.alignContent ?? previousBreakpoint.alignContent ?? 'start';
      const alignItems = values.alignItems ?? previousBreakpoint.alignItems ?? 'stretch';
      const justifyContent = values.justifyContent ?? previousBreakpoint.justifyContent ?? 'start';
      const justifyItems = values.justifyItems ?? previousBreakpoint.justifyItems ?? 'stretch';

      // Update the style object with inherited or explicit values
      style[`--${breakpoint}-alignItems`] = alignItems;
      style[`--${breakpoint}-alignContent`] = alignContent;
      style[`--${breakpoint}-justifyItems`] = justifyItems;
      style[`--${breakpoint}-justifyContent`] = justifyContent;

      // Update previousBreakpoint for inheritance
      previousBreakpoint = { ...previousBreakpoint, ...values };
    }
  });

  // If gap is not provided or the value is not defined in gapSizes, default to 'var(--grid-gap)'
  const gridGap = gap ? gapSizes[gap] : 'var(--grid-gap)';

  const styles = {
    gap: gridGap,
    width: 'var(--theme__connect-grid-width, 100%)',
  };

  const combinedStyle = { ...styles, ...style };
  const additionalClassName = gutter === true ? 'connect__grid-gutter' : '';

  return (
    <section
      className={`${className || ''} connect__grid ${breakpointClasses} ${additionalClassName}`}
      style={combinedStyle}
      data-testid={dataTestId}
      tabIndex={tabIndex}
    >
      {children}
    </section>
  );
};
