import React, { useState, useRef, useEffect } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { GradeBand } from 'src/enum/gradeband';
import '@connect/hmh-rive';

export type ButtonRiveProps = ButtonProps & {
  textTransform?: React.CSSProperties['textTransform'];
  opacity?: any | undefined;
  animSrc: string;
  stateMachine?: string;
  buttonText: string;
  gradeBand?: GradeBand;
  height?: boolean;
  playState?: string | null; // Control both play-state and opacity via this prop
};

export const ButtonRive: React.FC<ButtonRiveProps> = ({
  textTransform,
  animSrc,
  stateMachine = 'State Machine 1',
  buttonText,
  playState = 'paused', // Default play-state is not playing
  ...ButtonProps
}) => {
  const riveRef = useRef<HTMLElement | null>(null); // Properly type the ref to HTMLElement
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false); // State to track reduced motion preference

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // This effect updates the play-state on the hmh-rive component when playState changes
  useEffect(() => {
    if (riveRef.current) {
      riveRef.current.setAttribute('play-state', playState || 'paused');
    }
  }, [playState]);

  // Calculate opacity based on playState
  const isTypographyHidden = playState === 'playing' && !prefersReducedMotion;

  return (
    <Button {...ButtonProps} iconOpacity={isTypographyHidden ? 0 : 1}>
      <Typography
        element="p"
        ariaLive="polite"
        textTransform={textTransform}
        opacity={isTypographyHidden ? 0 : 1}
      >
        {buttonText}
      </Typography>
      <hmh-rive
        ref={riveRef}
        src={animSrc}
        autoplay={false}
        hidePlayPause
        stateMachine={stateMachine}
        aria-hidden="true"
        style={{ opacity: isTypographyHidden ? 1 : 0 }}
        height
      ></hmh-rive>
    </Button>
  );
};
