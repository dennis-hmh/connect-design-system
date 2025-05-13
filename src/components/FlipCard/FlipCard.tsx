import React, { PropsWithChildren, useCallback, useRef } from 'react';
import cn from 'classnames';
import styles from './FlipCard.module.css';

import { isRenderProp, type PropsWithOptionalRenderProp } from '../../types/renderProps';

import { useControllableState } from '../../hooks/useControllableState';
import { FlipCardContext, FlipCardContextContextType, useFlipCardContext } from './FlipCardContext';

type FlipCardWrapperProps = {
  id?: string;
  flipTrigger?: 'click' | 'hover' | 'button';
  fullWidth?: boolean;
  transitionSpeed?: 'rapid' | 'fast' | 'medium' | 'slow' | 'slowest';
  transformScale?: number | undefined;
  dataTestId?: string;
};

type BaseFlipCardProps = FlipCardWrapperProps & {
  id?: string;
  defaultFlipped?: boolean;
  flipped?: boolean;
  onChange?: () => void;
};

export type FlipcardProps = PropsWithOptionalRenderProp<
  BaseFlipCardProps,
  FlipCardContextContextType
>;

export const Flipcard: React.FC<FlipcardProps> = ({
  children,
  defaultFlipped = false,
  flipped,
  onChange,
  ...rest
}) => {
  const [flip, setFlip] = useControllableState({
    onChange: onChange,
    value: flipped,
    defaultValue: defaultFlipped,
  });
  const ref = useRef(null);

  const toggleCallback = (value?: boolean) => setFlip((prevFlip) => value ?? !prevFlip);
  const toggle = useCallback(toggleCallback, [setFlip]);

  const flipCardCtx: FlipCardContextContextType = { flip, toggle, ref };

  return (
    <FlipCardContext.Provider value={flipCardCtx}>
      <FlipCardWrapper {...rest}>
        <FlipCardRotatingWrapper flip={flip}>
          {isRenderProp(children) ? children(flipCardCtx) : children}
        </FlipCardRotatingWrapper>
      </FlipCardWrapper>
    </FlipCardContext.Provider>
  );
};

function FlipCardWrapper({
  id,
  children,
  dataTestId,
  flipTrigger = 'click',
  fullWidth = false,
  transformScale = 1,
  transitionSpeed = 'medium',
}: PropsWithChildren<FlipCardWrapperProps>) {
  const { flip, toggle, ref } = useFlipCardContext();

  const { onMouseEnter, onMouseLeave } = useFlipOnHover({ flipTrigger, toggle });

  const { className, onClick, onKeyDown, role, tabIndex } = useInteractiveFlipCardProps({
    flip,
    flipTrigger,
    toggle,
  });

  const classNames = cn(
    {
      [styles['connect__full-width']]: fullWidth,
    },
    styles['connect__flipcard'],
    className,
  );
  const style: React.CSSProperties = {
    '--connect__transition-speed': `var(--connect__transition-${transitionSpeed})`,
    '--connect__transform-scale': CSS.number(transformScale),
  } as React.CSSProperties;

  return (
    <div
      id={id}
      className={classNames}
      role={role}
      tabIndex={tabIndex}
      aria-pressed={flip}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      style={style}
      data-testid={dataTestId}
      ref={ref}
    >
      {children}
    </div>
  );
}

function FlipCardRotatingWrapper(props: PropsWithChildren<{ flip: boolean }>) {
  const className = cn(styles['connect__flipcard-inner'], {
    [styles['connect__flipcard-flipped']]: props.flip,
  });

  return <div className={className}>{props.children}</div>;
}

function useFlipOnHover({
  flipTrigger,
  toggle,
}: {
  flipTrigger: FlipcardProps['flipTrigger'];
  toggle: FlipCardContextContextType['toggle'];
}) {
  const handleMouseEnterOrLeaveCallback = useCallback((value: boolean) => toggle(value), [toggle]);

  return flipTrigger === 'hover'
    ? {
        onMouseEnter: () => handleMouseEnterOrLeaveCallback(true),
        onMouseLeave: () => handleMouseEnterOrLeaveCallback(false),
      }
    : { onMouseEnter: undefined, onMouseLeave: undefined };
}

function useInteractiveFlipCardProps({ flip, flipTrigger, toggle }) {
  const isFlipCardInteractive = ['click', 'hover'].includes(flipTrigger);

  const handleClick = useCallback(() => {
    if (flipTrigger !== 'click') return;
    toggle();
  }, [toggle, flipTrigger]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!['Enter', ' '].includes(e.key)) return;
      e.preventDefault();
      toggle();
    },
    [toggle],
  );

  return isFlipCardInteractive
    ? {
        ariaPressed: flip,
        className: undefined,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        role: 'button',
        tabIndex: 0,
      }
    : {
        ariaPressed: undefined,
        className: styles['connect__flipcard-with-button'],
        onClick: undefined,
        onKeyDown: undefined,
        role: undefined,
        tabIndex: undefined,
      };
}
