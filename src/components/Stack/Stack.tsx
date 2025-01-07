import React from 'react';

type SpacingSizes = 'zero' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: SpacingSizes;
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  alignSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  paddingX?: SpacingSizes;
  paddingY?: SpacingSizes;
  flex?: string;
};

export type StackProps = {
  children: React.ReactNode;
  element?: 'section' | 'article' | 'main' | 'header' | 'footer' | 'div';
  xs?: BreakpointValues;
  sm?: BreakpointValues;
  md?: BreakpointValues;
  lg?: BreakpointValues;
  xl?: BreakpointValues;
  className?: string;
  dataTestId?: string;
  flex?: 'auto' | 'grow' | 'shrink' | 'none' | 'fill' | number | boolean;
};

const generateBreakpointStyles = (
  breakpoint: string,
  values: BreakpointValues,
  previousValues: BreakpointValues,
) => {
  const direction = values.direction ?? previousValues.direction ?? 'column';
  const spacing = values.spacing ?? previousValues.spacing ?? 'xs';
  const alignItems = values.alignItems ?? previousValues.alignItems ?? 'stretch';
  const alignSelf = values.alignSelf ?? previousValues.alignSelf ?? 'stretch';
  const justifyContent = values.justifyContent ?? previousValues.justifyContent ?? 'start';
  const flexWrap = values.flexWrap ?? previousValues.flexWrap ?? 'wrap';
  const paddingX = values.paddingX ?? previousValues.paddingX ?? '';
  const paddingY = values.paddingY ?? previousValues.paddingY ?? '';
  const flex = values.flex ?? previousValues.flex ?? '';

  return {
    [`--connect__stack-${breakpoint}-direction`]: direction,
    [`--connect__stack-${breakpoint}-spacing`]: `var(--connect__spacer-${spacing})`,
    [`--connect__stack-${breakpoint}-alignItems`]: alignItems,
    [`--connect__stack-${breakpoint}-alignSelf`]: alignSelf,
    [`--connect__stack-${breakpoint}-justifyContent`]: justifyContent,
    [`--connect__stack-${breakpoint}-flexWrap`]: flexWrap,
    [`--connect__stack-${breakpoint}-paddingX`]: paddingX
      ? `var(--connect__spacer-${paddingX})`
      : '',
    [`--connect__stack-${breakpoint}-paddingY`]: paddingY
      ? `var(--connect__spacer-${paddingY})`
      : '',
    [`--connect__stack-${breakpoint}-flex`]: flex,
  };
};

const generateFlexValue = (flex: StackProps['flex']): string | undefined => {
  const flexPresets = {
    auto: '1 1 auto',
    grow: '1 0 auto',
    shrink: '0 1 auto',
    none: 'none',
    fill: '1 1 100%',
  };

  if (typeof flex === 'boolean') return flex ? '1' : undefined;
  if (typeof flex === 'number') return `${flex}`;
  if (typeof flex === 'string') return flexPresets[flex] || flex;
  return undefined;
};

export const Stack: React.FC<StackProps> = ({
  children,
  element: Component = 'div',
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  dataTestId,
  flex,
}) => {
  const style: React.CSSProperties = {};
  const breakpoints = {
    xs: flex ? { ...xs, flex: generateFlexValue(flex) } : xs,
    sm,
    md,
    lg,
    xl,
  };
  let previousBreakpoint: BreakpointValues = {};

  // Add dynamic styles for breakpoints
  Object.entries(breakpoints).forEach(([breakpoint, values]) => {
    if (values) {
      Object.assign(style, generateBreakpointStyles(breakpoint, values, previousBreakpoint));
      previousBreakpoint = { ...previousBreakpoint, ...values };
    }
  });

  // Construct classes
  const breakpointClasses = Object.keys(breakpoints)
    .filter((bp) => breakpoints[bp as keyof typeof breakpoints])
    .map((bp) => `connect__stack-${bp}`)
    .join(' ');

  const classes = `connect__stack ${className || ''} ${breakpointClasses}`;

  return (
    <Component className={classes} style={style} data-testid={dataTestId}>
      {children}
    </Component>
  );
};
