import type { Opaque } from 'src/types/opaque';

export enum Breakpoint {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export type MediaQuery = Opaque<string>;
const toMediaQuery = (query: string): MediaQuery => query as unknown as MediaQuery;

type BreakpointValues = Record<Breakpoint, string>;
const breakpointValues: BreakpointValues = {
  [Breakpoint.xs]: '0rem',
  [Breakpoint.sm]: '30rem',
  [Breakpoint.md]: '40.625rem',
  [Breakpoint.lg]: '55rem',
  [Breakpoint.xl]: '80rem',
};

export const media = {
  values: breakpointValues,
  up: (key: Breakpoint): MediaQuery => {
    const value = media.values[key];
    return toMediaQuery(`(min-width: ${value})`);
  },
  down: (key: Breakpoint): MediaQuery => {
    const value = media.values[key];
    return toMediaQuery(`(max-width: calc(${value} - 1px))`);
  },
  between: (start: Breakpoint, end: Breakpoint): MediaQuery => {
    const minValue = media.values[start];
    const maxValue = media.values[end];
    return toMediaQuery(`(min-width: ${minValue}rem) and (max-width: calc(${maxValue} - 1px))`);
  },
  only: (key: Breakpoint): MediaQuery => {
    const keys = Object.values(Breakpoint);
    const index = keys.indexOf(key);

    const nextKey = keys[index + 1];
    return nextKey ? media.between(key, nextKey) : media.up(key);
  },
};
