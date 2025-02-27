import React, { useState, useId } from 'react';
import { Typography, TypographyProps } from '../Typography/Typography';
import { Paper } from '../Paper/Paper';
import { Color } from '../../utils/colors';
import { TooltipPosition, getPositionClass } from '../../utils/position';
import { GradeBand } from '../../enum/gradeband';

export type TooltipProps = {
  children: React.ReactNode;
  title: React.ReactNode;
  placement?: TooltipPosition;
  backgroundColor?: Color;
  elevation?: 4;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  className?: string;
  describeChild?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  disableInteractive?: boolean;
  disableTouchListener?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
} & Pick<TypographyProps, 'color' | 'textWrap'>;

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  placement = 'top',
  backgroundColor = 'surface-dark',
  color = 'white',
  textWrap = 'nowrap',
  elevation = 4,
  open: controlledOpen,
  onOpen,
  onClose,
  describeChild = false,
  enterDelay = 0,
  leaveDelay = 0,
  disableInteractive = false,
  disableTouchListener = false,
  dataTestId,
  ...typographyProps
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId();
  const descriptionId = useId();

  // Theese are all the mui events

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

  //might be a better way to do this (thinking what you did dropdowns)
  const isOpen = controlledOpen !== undefined ? controlledOpen : isVisible;

  // MUI does this, dunno why, just copied
  // clone child element to add accessibility props
  // Per the internet This is needed for:
  /* 
  Accessibility - connects tooltip text to the element for screen readers
  Keyboard navigation - allows users to interact with tooltips without a mouse
  Focus management - ensures tooltips work with keyboard focus states
  ARIA compliance - maintains proper accessibility relationships
*/
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
      className={`connect__tooltip connect__position ${getPositionClass(placement)}`}
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
          className={`connect__tooltip connect__position-${placement}`}
          elevation={elevation}
          backgroundColor={backgroundColor}
          id={describeChild ? descriptionId : tooltipId}
          aria-hidden={!isOpen}
          role="tooltip"
        >
          <Typography
            element="p"
            color={color}
            size="caption"
            textWrap={textWrap}
            {...typographyProps}
          >
            {title}
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default Tooltip;
