/* eslint-disable no-console */

import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { EventType, RiveState, Rive } from '@rive-app/react-canvas';
import { GradeBand } from '../../enum/gradeband';
import { Typography } from '../Typography/Typography';
import { usePrefersReducedMotion, usePrefersDarkMode } from './accessibilityUtils';

export type RiveRef = MutableRefObject<Rive | null>;

export type RiveEngineProps = RiveState & {
  desc?: string;
  disableTouchScroll?: boolean;
  width?: string;
  height?: string;
  sizeByHeight?: boolean;
  gradeBand?: GradeBand;
  playState?: 'playing' | 'paused' | 'stopped';
  volume?: number;
  ignoreReducedMotion?: boolean;
  ignoreDarkMode?: boolean;
  debug?: boolean;
  style?: React.CSSProperties;
};

export const RiveEngine: React.FC<RiveEngineProps> = ({
  desc,
  width,
  height,
  rive,
  RiveComponent,
  sizeByHeight = false,
  volume = 1,
  ignoreReducedMotion = false,
  ignoreDarkMode = false,
  debug: DEBUG = false,
  style
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersDarkMode = usePrefersDarkMode();

  const accessibilityInputs = useRef({});

  /** Set up the Rive */
  useEffect(() => {
    if (!rive) return;

    //If debugging is enabled, log the Rive object
    if (DEBUG) {
      console.log(rive);
    }

    //Initial setup
    handleLoad();
    updateAspectRatio();

    //Handle accessibility preferences
    handleReducedMotion();
    handleDarkMode();

    //Subscribe to various Rive EventTypes
    rive.on(EventType.Advance, onRiveAdvance);
    rive.on(EventType.RiveEvent, onRiveEventReceived);

    //Set initial volume
    setVolume(volume);

    return () => rive?.removeAllRiveEventListeners();
  }, [rive]);

  /** Set the volume of internal Rive sound events
   *  Note that this only affects sounds that begin playing after this value is set
   *  @param newVolume A number from 0 to 1
   */
  function setVolume(newVolume: number) {
    if (rive) rive.volume = newVolume;
  }

  /** Watch for changes in the volume prop */
  useEffect(() => {
    setVolume(volume);
  }, [volume]);

  /** Watch for changes in the Reduced Motion preference */
  useEffect(() => {
    handleReducedMotion();
  }, [prefersReducedMotion]);

  /** Watch for changes in the Dark Mode preference */
  useEffect(() => {
    handleDarkMode();
  }, [prefersDarkMode]);

  /** Handle changes in the Reduced Motion preference */
  function handleReducedMotion() {
    if (!rive || ignoreReducedMotion) return;

    DEBUG && console.log('prefersReducedMotion:', prefersReducedMotion);

    const reducedMotionInput = accessibilityInputs[RESERVED_ACCESSIBILITY_INPUTS.reducedMotion];

    //Use the State Machine's Reduced Motion setup, if it has one!
    if (reducedMotionInput) reducedMotionInput.value = prefersReducedMotion;
    else if (prefersReducedMotion) pause();
  }

  /** Handle changes in the Dark Mode preference */
  function handleDarkMode() {
    if (!rive || ignoreDarkMode) return;

    DEBUG && console.log('prefersDarkMode:', prefersDarkMode);

    const darkModeInput = accessibilityInputs[RESERVED_ACCESSIBILITY_INPUTS.darkMode];
    if (!darkModeInput) return;

    //Use the State Machine's Dark Mode setup, if it has one!
    /* NOTE: Rive will likely release their "Data Binding" feature soon, 
      which should hopefully open more flexible options for tweaking colours at runtime */
    darkModeInput.value = prefersDarkMode;
  }

  /** Called after the Rive loads
   *  TO-DO: add more stuff here!
   */
  function handleLoad() {
    DEBUG && console.log('Rive loaded!');
  }

  function onRiveEventReceived(riveEvent) {
    //TO-DO: expand this and add some common helper events!
    DEBUG && console.log('RiveEvent reported:', riveEvent);
  }

  function onRiveAdvance(riveEvent) {
    const deltaTime = riveEvent.data;
    0 && DEBUG && console.log(`Frame drawn in ${deltaTime.toFixed(2)}s`); // eslint-disable-line no-constant-binary-expression
  }

  //Handle changes in size
  //TO-DO: check this in detail when there's more time! Recently brought over from Chris' branch, need to investigate how it works.

  const divRef = useRef<HTMLDivElement | null>(null);
  const [calculatedWidth, setcalculatedWidth] = useState(0); // State to store the dynamic height
  const [aspectRatio, setAspectRatio] = useState<number | null>(null); // Aspect ratio state

  function updateAspectRatio() {
    if (!rive) return;

    const artboardBounds = rive.bounds;
    const ratio = artboardBounds.maxX / artboardBounds.maxY;
    setAspectRatio(ratio);
  }

  useEffect(() => {
    if (divRef.current && aspectRatio) {
      // Measure the height of the div
      const divHeight = divRef.current.offsetHeight;
      setcalculatedWidth(divHeight * aspectRatio); // Calculate height based on aspect ratio
    }
  }, [width, height, sizeByHeight, aspectRatio]); // Recalculate if sizeByHeight or aspect ratio changes

  /** State Machine Input names that're reserved for accessibility features */
  const RESERVED_ACCESSIBILITY_INPUTS = {
    reducedMotion: 'enableReducedMotion',
    darkMode: 'enableDarkMode',
  };

  function pause() {
    rive?.pause();
  }

  // const widthToSet = width == undefined ? '100%' : width;
  // const heightToSet = height == undefined ? '100%' : height;
  //...(sizeByHeight && aspectRatio && { width: calculatedWidth * aspectRatio })
  /* TO-DO: try to get Chris' described sizing behaviour working when there's more time
    For now, just set a size for the container's width/height props like '500px'
  */

  // if (calculatedWidth) {
  //   // To solve error: "is declared but its value is never read." Please fix accordenly
  //   console.log('calculatedWidth:', calculatedWidth);
  // }

  return (
    <div
      ref={divRef}
      style={{
        height: '100%', 
        ...(sizeByHeight && aspectRatio ? { width: calculatedWidth } : { width: '100%' }),
        ...style
        }}
    >
      <RiveComponent />
      <Typography element="p" ariaLive="polite" className='connect__visually-hidden'>
        {desc}
      </Typography>
    </div>
  );
};
