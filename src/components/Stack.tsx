import React from 'react';

interface BreakpointValues {
  direction?: 'row' | 'column';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

interface StackProps {
  children: React.ReactNode;
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
  className?: string;
  dataTestId?: string;
}

const Stack: React.FC<StackProps> = ({ children, xs, sm, md, lg, xl, className, dataTestId }) => {
  const style: React.CSSProperties = {};
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
      if (values.direction) style[`--${breakpoint}-connect-stack-direction`] = direction;
      if (values.spacing)
        style[`--${breakpoint}-connect-stack-spacing`] = `var(--connect-spacer-${spacingKey})`;
      if (values.alignItems) style[`--${breakpoint}-connect-stack-align-items`] = alignItems;
      if (values.justifyContent)
        style[`--${breakpoint}-connect-stack-justify-content`] = justifyContent;
      if (values.flexWrap) style[`--${breakpoint}-connect-stack-flex-wrap`] = flexWrap;

      // Update previousBreakpoint for inheritance
      previousBreakpoint = { ...previousBreakpoint, ...values };
    }
  });

  const classes = `connect__stack ${className || ''} ${breakpointClasses}`;

  return (
    <div className={classes} style={style} data-testid={dataTestId}>
      {children}
    </div>
  );
};

export default Stack;
