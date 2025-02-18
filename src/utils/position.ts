export type Position =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'center-right'
  | 'center-left'
  | 'center-center';

export type AnchorOrigin = {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

export const getPositionClass = (position: Position | AnchorOrigin): string => {
  if (typeof position === 'string') {
    return `connect__position-${position}`;
  }

  return `connect__position-${position.vertical}-${position.horizontal}`;
};
