import React, { MutableRefObject, useEffect, useRef } from 'react';
import { StateMachineInput, StateMachineInputType, EventType, useRive } from '@rive-app/react-canvas';
import { Typography } from '../Typography/Typography';
import { usePrefersReducedMotion, usePrefersDarkMode } from './accessibilityUtils'

export type RiveEngineProps = {
  src: string;
  desc?: string;
  stateMachine?: string;
  artboard?: string;
  playState?: 'playing' | 'paused' | 'stopped';
  autoplay?: boolean;
  disableTouchScroll?: boolean;
  contain?: boolean;
  inputs?: { current: {[key: string]: StateMachineInput}, exposed?: boolean } | MutableRefObject<undefined>;
  inputToStateLinks?: {[key: string]: any};
  volume?: number;
  ignoreReducedMotion?: boolean;
  ignoreDarkMode?: boolean;
  debug?: boolean;
};

export const RiveEngine: React.FC<RiveEngineProps> = ({
  src,
  desc,
  stateMachine = 'State Machine 1',
  artboard,
  playState = 'playing',
  autoplay = true,
  disableTouchScroll = true,
  contain = false,
  inputs = undefined,
  inputToStateLinks = {},
  volume = 1,
  ignoreReducedMotion = false,
  ignoreDarkMode = false,
  debug: DEBUG = false,
}) => {

  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersDarkMode = usePrefersDarkMode();

  const accessibilityInputs = useRef({});

  const { RiveComponent, rive } = useRive({
    src,
    autoplay,
    ...(artboard ? { artboard } : {}),
    stateMachines: stateMachine,
    isTouchScrollEnabled: disableTouchScroll,
  }, {
    fitCanvasToArtboardHeight: contain ? false : true,
  });

  /** Set up the Rive */
  useEffect(() => {
    if (!rive)
      return;
  
    //If debugging is enabled, log the Rive object
    DEBUG && console.log(rive);

    //Initial setup
    handleLoad();
    exposeInputs();

    //Handle accessibility preferences
    handleReducedMotion();
    handleDarkMode();
  
    //Subscribe to various Rive EventTypes
    rive.on(EventType.Play, onRivePlay);
    rive.on(EventType.Advance, onRiveAdvance);
    rive.on(EventType.RiveEvent, onRiveEventReceived);

    //Set initial volume
    setVolume(volume);
  
  }, [rive, src]); 

  watchReducedMotion();
  watchDarkMode();
  watchVolume();

  /** Set the volume of internal Rive sound events
   *  Note that this only affects sounds that begin playing after this value is set
   *  @param newVolume A number from 0 to 1
  */
  function setVolume(newVolume: number){
    if (rive) rive.volume = newVolume;
  }

  /** Watch for changes in the volume prop */
  function watchVolume(){
    useEffect(() => {
      setVolume(volume);
    }, [volume]);
  }

  /** Watch for changes in the Reduced Motion preference */
  function watchReducedMotion(){
    useEffect(() => {
      handleReducedMotion();
    }, [prefersReducedMotion]);
  }
  
  /** Watch for changes in the Dark Mode preference */
  function watchDarkMode(){
    useEffect(() => {
      handleDarkMode();
    }, [prefersDarkMode]);
  }

  /** Handle changes in the Reduced Motion preference */
  function handleReducedMotion(){
    if (!rive || ignoreReducedMotion)
      return;

    DEBUG && console.log("prefersReducedMotion:", prefersReducedMotion);

    const reducedMotionInput = accessibilityInputs[RESERVED_ACCESSIBILITY_INPUTS.reducedMotion];

    //Use the State Machine's Reduced Motion setup, if it has one!
    if (reducedMotionInput)
      reducedMotionInput.value = prefersReducedMotion;
    //Otherwise simply pause/unpause the animation
    else
      prefersReducedMotion ? pause() : play();
  }

  /** Handle changes in the Dark Mode preference */
  function handleDarkMode(){
    if (!rive || ignoreDarkMode)
      return;

    DEBUG && console.log("prefersDarkMode:", prefersDarkMode);

    const darkModeInput = accessibilityInputs[RESERVED_ACCESSIBILITY_INPUTS.darkMode];
    if (!darkModeInput)
      return;

    //Use the State Machine's Dark Mode setup, if it has one!
    /* NOTE: Rive will likely release their "Data Binding" feature soon, 
      which should hopefully open more flexible options for tweaking colours at runtime */
    darkModeInput.value = prefersDarkMode;
  }
    
  function onRivePlay(){
    //console.log("Playing!");
  };

  /** Called after the Rive loads
   *  TO-DO: add more stuff here!
   */
  function handleLoad(){
    DEBUG && console.log('Rive loaded!', src);
  };

  function onRiveEventReceived(riveEvent){ 
    //TO-DO: expand this and add some common helper events!
    DEBUG && console.log('RiveEvent reported:', riveEvent.data); 
  };

  function onRiveAdvance(riveEvent){ 
    const deltaTime = riveEvent.data;
    //DEBUG && console.log(`Frame drawn in ${deltaTime.toFixed(2)}s`); 

    if (inputToStateLinks)
      checkForInputChanges();
  }; 

  function checkForInputChanges(){
    if (!inputs || !inputToStateLinks || !inputs.current)
      return;

    Object.keys(inputToStateLinks).forEach(linkedInputName => {
      const stateLink = inputToStateLinks[linkedInputName];
      const smInput = inputs.current[linkedInputName];
      
      /* Not possible to detect Trigger-type Inputs' internal fire() events this way 
        (unsure if there's any way to detect them when they're fired from the Rive side - 
        aside from the animator reporting a RiveEvent as part of the same 
        internal Rive Listener setup that fires the Input)
      */
      if (!smInput || smInput.type == StateMachineInputType.Trigger)
        return;

      const prevValue = stateLink.prevValue;
      const currentValue = smInput.value;
      
      //If the value has changed since the last draw, use it to set the linked State value
      if (prevValue != undefined && prevValue != currentValue){
        const setterFunction = stateLink.setter;
        setterFunction(currentValue);
      }

      stateLink.prevValue = currentValue;
    });
  }

  //Handle changes in playState
  useEffect(() => {
    if (!rive)
      return;

    switch (playState){
      case 'playing': 
        return play();
      case 'paused':
        return pause();
      case 'stopped':
        return stop();
    }
  }, [playState, rive]);
  

  /** State Machine Inputs will stay hidden if their name begins with this, and won't be exposed onto the "inputs" prop object */
  const INPUT_HIDING_PREFIX = "_";

  /** State Machine Input names that're reserved for accessibility features */
  const RESERVED_ACCESSIBILITY_INPUTS = {
    reducedMotion: "enableReducedMotion",
    darkMode: "enableDarkMode",
  };

  /** Expose Rive State Machine Input objects onto the "inputs" prop object */
  function exposeInputs(){
    if (!rive) 
      return;

    // Get all the State Machine Input objects and store a reference to any that should be exposed
    const exposedInputs = {};
    const allInputs = rive.stateMachineInputs(stateMachine);
    allInputs.forEach(smInput => {

      //Expose the reserved accessibility inputs onto a separate object (the component will handle them itself) 
      if (Object.values(RESERVED_ACCESSIBILITY_INPUTS).includes(smInput.name))
        return accessibilityInputs[smInput.name] = smInput;

      //Don't expose the input if its prefix marks it as hidden
      if (smInput.name.startsWith(INPUT_HIDING_PREFIX)){
        DEBUG && console.log(`Hiding input "${smInput.name}", since its name begins in '${INPUT_HIDING_PREFIX}`);
        return;
      }

      exposedInputs[smInput.name] = smInput;

      DEBUG && console.log(`Input Name: ${smInput.name}, Type: ${StateMachineInputType[smInput.type]}`);
    });

    //Don't expose the inputs if the "inputs" prop object wasn't provided
    if (!inputs)
      return;

    inputs.current = exposedInputs;
    inputs["exposed"] = true;  //Note that the inputs have now been exposed
    
    DEBUG && console.log(inputs.current);
  }

  //Playback functions
  function play(){
    //Don't play if autoplay is disabled
    if (!rive || autoplay == false)
      return;

    //Don't play if prefersReducedMotion is on and the State Machine doesn't have an input-based reduced motion setup
    if (prefersReducedMotion && !accessibilityInputs[RESERVED_ACCESSIBILITY_INPUTS.reducedMotion])
      return;

    rive.play();
  }

  function pause(){
    rive && rive.pause();
  }

  function stop(){
    rive && rive.stop();
  }

  return (
    <>
      <RiveComponent/>
      <Typography element='p' ariaLive='polite'>{desc}</Typography>
    </>
  );
};


/** A general-purpose function for working with Rive StateMachineInputs that have
 *  been exposed onto a useRef() variable (provided to the RiveEngine via the "inputs" prop).
 *  This function is intended to be used by the ancestor of the RiveEngine component.
 * 
 * @param newValue  The value to set.
 * @param inputName The name of the State Machine input (check what was exposed onto the "inputs" object, if you're unsure what names are present!)
 * @param inputs    The "useRef()" object that's storing references to the RiveEngine's inputs. This is the same object passed to the RiveEngine via the "inputs" prop!
*/
export function setRiveInputValue(newValue: number | boolean, inputName: string, inputs: MutableRefObject<undefined> | { current: {[key: string]: StateMachineInput}, exposed?: boolean }, reportIfMissing = true, reportIfNotYetExposed = false){
  if (!inputs){
    console.error("Please provide the 'inputs' object (created with useRef)!");
    return;
  }

  //Stop if the inputs have yet to be exposed
  if (inputs.current == undefined || !inputs.exposed){
    reportIfNotYetExposed && console.error("The inputs have yet to be exposed!");
    return;
  }

  const input = inputs.current[inputName];
  if (!input){
    if (reportIfMissing)
      console.error(`Input "${inputName}" couldn't be found in the current State Machine!\n\nExposed inputs:`, inputs.current);
    return;
  }

  //If it's a Trigger-type Input and a nonzero value was provided, interpret this as a fire() request
  if (input.type == StateMachineInputType.Trigger){
      if (!newValue)
          return;
      input.fire();
      return {fired: true};
  }
  //If it's a Number or Boolean-type Input, just set a value as usual
  else {
      const prevValue = input.value;
      input.value = newValue;
      return {prevValue, newValue};
  }
}