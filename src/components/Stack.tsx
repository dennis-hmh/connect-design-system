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
      // Only apply a property if it is explicitly set or inherited from a previous breakpoint
      const direction = values.direction ?? previousBreakpoint.direction ?? 'column';
      const spacingKey = values.spacing ?? previousBreakpoint.spacing ?? 'xs';
      const alignItems = values.alignItems ?? previousBreakpoint.alignItems ?? 'stretch';
      const justifyContent = values.justifyContent ?? previousBreakpoint.justifyContent ?? 'start';
      const flexWrap = values.flexWrap ?? previousBreakpoint.flexWrap ?? 'wrap';

      // Now, only update the style object if the current breakpoint explicitly sets the property
      if (values.direction) style[`--${breakpoint}-direction`] = direction;
      if (values.spacing) style[`--${breakpoint}-spacing`] = `var(--connect-spacer-${spacingKey})`;
      if (values.alignItems) style[`--${breakpoint}-alignItems`] = alignItems;
      if (values.justifyContent) style[`--${breakpoint}-justifyContent`] = justifyContent;
      if (values.flexWrap) style[`--${breakpoint}-flexWrap`] = flexWrap;

      // Update previousBreakpoint for inheritance
      previousBreakpoint = { ...previousBreakpoint, ...values };
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
