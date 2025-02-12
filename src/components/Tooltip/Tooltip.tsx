import React, { useState, useId } from 'react';
import { Typography } from '../Typography/Typography';
import { Paper } from '../Paper/Paper';
import { Color } from '../../utils/colors';
import { GradeBand } from '../../enum/gradeband';

// we could move spacers and typography to a util file
// they are in a lot of components now

export type TooltipProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  backgroundColor?: Color;
  color?: Color;
  elevation?: -2 | 0 | 2 | 4 | 6;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'unset';
  dataTestId?: string;
  gradeBand?: GradeBand;
  describeChild?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  disableInteractive?: boolean;
  disableTouchListener?: boolean;
};

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  placement = 'top',
  backgroundColor = 'surface-dark',
  color = 'white',
  elevation = 4,
  open: controlledOpen,
  onOpen,
  onClose,
  className = '',
  size = 'sm',
  dataTestId,
  describeChild = false,
  enterDelay = 0,
  leaveDelay = 0,
  disableInteractive = false,
  disableTouchListener = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId();
  const descriptionId = useId();

  const handleMouseEnter = () => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      onOpen?.();
    }, enterDelay);
    return () => clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, leaveDelay);
    return () => clearTimeout(timer);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (disableTouchListener) return;

    event.preventDefault();
    const timer = setTimeout(() => {
      setIsVisible(true);
      onOpen?.();
    }, 700);
    return () => clearTimeout(timer);
  };

  const handleFocus = () => {
    setIsVisible(true);
    onOpen?.();
  };

  const handleBlur = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsVisible(false);
      onClose?.();
    }
  };

  const getDefaultTypographySize = (tooltipSize: string) => {
    switch (tooltipSize) {
      case 'xs':
        return 'caption';
      case 'sm':
        return 'caption';
      case 'md':
        return 'body-sm';
      case 'lg':
        return 'body-md';
      case 'xl':
        return 'body-lg';
      case 'xxl':
        return 'heading-sm';
      case 'unset':
        return 'body-sm';
      default:
        return 'body-sm';
    }
  };

  //might be a better way to do this
  const isOpen = controlledOpen !== undefined ? controlledOpen : isVisible;

  // MUI does this, dunno why, just copied
  // clone child element to add accessibility props
  const child = React.Children.only(children);
  const enhancedChild = React.cloneElement(child as React.ReactElement, {
    'aria-describedby': describeChild ? descriptionId : tooltipId,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    tabIndex: (child as React.ReactElement).props.tabIndex ?? 0,
  });

  return (
    <div
      className={`connect__tooltip-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={!disableInteractive ? handleMouseLeave : undefined}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      data-testid={dataTestId}
    >
      {enhancedChild}
      {isOpen && (
        <Paper
          className={`connect__tooltip connect__tooltip--${placement}`}
          elevation={elevation}
          backgroundColor={backgroundColor}
          id={describeChild ? descriptionId : tooltipId}
          aria-hidden={!isOpen}
          role="tooltip"
        >
          <Typography element="p" size={getDefaultTypographySize(size)} color={color}>
            {title}
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default Tooltip;
