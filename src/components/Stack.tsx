import React, { ReactNode, CSSProperties } from 'react';

type SpacerSizes = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface BreakpointValues {
  direction?: 'row' | 'column';
  spacing?: SpacerSizes;
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

interface StackProps {
  children: ReactNode;
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
  className?: string;
  dataTestId?: string;
}

const Stack: React.FC<StackProps> = ({ children, xs, sm, md, lg, xl, className, dataTestId }) => {
  // Helper function to inherit values
  const getInheritedValue = <T,>(
    currentSize: BreakpointValues | undefined,
    previousSize: BreakpointValues,
    property: keyof BreakpointValues,
    defaultValue: T,
  ): T => {
    return (currentSize?.[property] ?? previousSize[property] ?? defaultValue) as T;
  };

  const style: CSSProperties = {};
  const breakpoints = { xs, sm, md, lg, xl };
  let previousBreakpoint: BreakpointValues = {};

  // Construct a list of classes based on the breakpoints provided
  const breakpointClasses = Object.keys(breakpoints)
    .filter((bp) => breakpoints[bp as keyof typeof breakpoints])
    .map((bp) => `stack-${bp}`)
    .join(' ');

  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      const direction = getInheritedValue(values, previousBreakpoint, 'direction', 'column');
      const spacingKey = getInheritedValue(values, previousBreakpoint, 'spacing', 'xs');
      const alignItems = getInheritedValue(values, previousBreakpoint, 'alignItems', 'stretch');
      const justifyContent = getInheritedValue(
        values,
        previousBreakpoint,
        'justifyContent',
        'start',
      );
      const flexWrap = getInheritedValue(values, previousBreakpoint, 'flexWrap', 'wrap');

      // Use spacerSizes to set the gap
      const spacing = `var(--connect-spacer-${spacingKey})`;

      // Update style with breakpoint values
      style[`--${breakpoint}-direction`] = direction;
      style[`--${breakpoint}-spacing`] = spacing;
      style[`--${breakpoint}-alignItems`] = alignItems;
      style[`--${breakpoint}-justifyContent`] = justifyContent;
      style[`--${breakpoint}-flexWrap`] = flexWrap;

      previousBreakpoint = values;
    }
  });

  const classes = `connect-stack ${className || ''} ${breakpointClasses}`;

  return (
    <div className={classes} style={style} data-test={dataTestId}>
      {children}
    </div>
  );
};

export default Stack;
