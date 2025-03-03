export type CommonPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'center-right'
  | 'center-left'
  | 'center-center';

  export type TooltipPosition =
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';


// Badge uses props anchorOrigin
export type AnchorOrigin = {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

export type Position = CommonPosition | TooltipPosition;


// I want to keep the mui prop names eg. Anchor origin for badge and position for tooltip
export const anchorOriginToPosition = (anchor: AnchorOrigin): CommonPosition => {
  return `${anchor.vertical}-${anchor.horizontal}` as CommonPosition;
};

// Here i am trying to map the mui position to the common postitions 
export const tooltipPositionToPosition = (position: TooltipPosition): CommonPosition => {
  const mapping: Record<TooltipPosition, CommonPosition> = {
    'bottom-end': 'bottom-right',
    'bottom-start': 'bottom-left',
    'bottom': 'bottom-center',
    'left-end': 'bottom-left',
    'left-start': 'top-left',
    'left': 'center-left',
    'right-end': 'bottom-right',
    'right-start': 'top-right',
    'right': 'center-right',
    'top-end': 'top-right',
    'top-start': 'top-left',
    'top': 'top-center'
  };
  return mapping[position];
};


export const getPositionClass = (position: Position | AnchorOrigin): string => {
  if (typeof position === 'string') {
    // convert the tooltip position to our pattern
    if (position.includes('-end') || position.includes('-start') || 
        position === 'top' || position === 'bottom' || 
        position === 'left' || position === 'right') {
      return `connect__position-${tooltipPositionToPosition(position as TooltipPosition)}`;
    }
    return `connect__position-${position}`;
  }
  
  // Handle AnchorOrigin
  return `connect__position-${anchorOriginToPosition(position)}`;
};
