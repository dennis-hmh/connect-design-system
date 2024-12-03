import React from 'react';

export type BreakpointValues = {
  direction?: 'row' | 'column';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'zero';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  paddingX?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'zero';
  paddingY?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'zero';
};

export type StackProps = {
  children: React.ReactNode;
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
  className?: string;
  dataTestId?: string;
};

export const Stack: React.FC<StackProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  dataTestId,
}) => {
  const style: React.CSSProperties = {};
  const breakpoints = { xs, sm, md, lg, xl };
  let previousBreakpoint: BreakpointValues = {};

  // Construct a list of classes based on the breakpoints provided
  const breakpointClasses = Object.keys(breakpoints)
    .filter((bp) => breakpoints[bp as keyof typeof breakpoints])
    .map((bp) => `connect__stack-${bp}`)
    .join(' ');

  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      // Only apply a property if it is explicitly set or inherited from a previous breakpoint
      const direction = values.direction ?? previousBreakpoint.direction ?? 'column';
      const spacingKey = values.spacing ?? previousBreakpoint.spacing ?? 'xs';
      const alignItems = values.alignItems ?? previousBreakpoint.alignItems ?? 'stretch';
      const justifyContent = values.justifyContent ?? previousBreakpoint.justifyContent ?? 'start';
      const flexWrap = values.flexWrap ?? previousBreakpoint.flexWrap ?? 'wrap';
      const paddingX = values.paddingX ?? previousBreakpoint.paddingX ?? '';
      const paddingY = values.paddingY ?? previousBreakpoint.paddingY ?? '';

      // Update the style object with inherited or explicit values
      style[`--${breakpoint}-direction`] = direction;
      style[`--${breakpoint}-spacing`] = `var(--connect__spacer-${spacingKey})`;
      style[`--${breakpoint}-alignItems`] = alignItems;
      style[`--${breakpoint}-justifyContent`] = justifyContent;
      style[`--${breakpoint}-flexWrap`] = flexWrap;
      style[`--${breakpoint}-paddingX`] = `var(--connect__spacer-${paddingX})`;
      style[`--${breakpoint}-paddingY`] = `var(--connect__spacer-${paddingY})`;

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
