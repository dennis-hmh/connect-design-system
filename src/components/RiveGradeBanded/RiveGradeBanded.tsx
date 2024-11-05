import React, { useEffect, useRef } from 'react';
import { GradeBandContext } from '../../context/GradeBandContext';
import { GradeBand } from '../../enum/gradeband';
import '@connect/hmh-rive';

// Define the type for the custom <hmh-rive> element
interface HmhRiveElement extends HTMLElement {
  inputs?: { [key: string]: { value: any } };
  setAttribute(key: string, value: any): void;
}

export const RiveGradeBanded: React.FC<RiveGradeBandedProps> = ({
  gradeBand,
  srcDefault,
  src23,
  src45,
  src68,
  src912,
  descDefault,
  desc23,
  desc45,
  desc68,
  desc912,
  stateMachine = 'State Machine 1',
  artboard,
  autoplay = true,
  hidePlayPause,
  playState = 'playing',
  contain = false,
  height,
  inputs = {},
}) => {
  // Use the custom type for the ref
  const hmhRiveRef = useRef<HmhRiveElement>(null);

  const getValuesForGradeBand = () => {
    switch (gradeBand) {
      case GradeBand.G2_3:
        return {
          riveSrc: src23 || srcDefault || '',
          altText: desc23 || descDefault || '',
        };
      case GradeBand.G4_5:
        return {
          riveSrc: src45 || srcDefault || '',
          altText: desc45 || descDefault || '',
        };
      case GradeBand.G6_8:
        return {
          riveSrc: src68 || srcDefault || '',
          altText: desc68 || descDefault || '',
        };
      case GradeBand.G9_12:
        return {
          riveSrc: src912 || srcDefault || '',
          altText: desc912 || descDefault || '',
        };
      default:
        return {
          riveSrc: srcDefault || '',
          altText: descDefault || '',
        };
    }
  };

  const { riveSrc: finalRiveSrc, altText: finalAltText } = getValuesForGradeBand();

  // Update inputs on the <hmh-rive> element whenever they change
  useEffect(() => {
    if (hmhRiveRef.current) {
      console.log('Updating inputs on hmhRiveRef:', inputs);
      Object.entries(inputs).forEach(([key, value]) => {
        hmhRiveRef.current?.setAttribute(key, value);
        if (hmhRiveRef.current?.inputs?.[key]) {
          hmhRiveRef.current.inputs[key].value = value;
        }
      });
    }
  }, [inputs]);
  
  return (
    <GradeBandContext.Provider value={gradeBand}>
      <hmh-rive
        ref={hmhRiveRef}
        src={finalRiveSrc}
        desc={finalAltText}
        autoplay={autoplay}
        play-state={playState}
        hidePlayPause={hidePlayPause}
        stateMachine={stateMachine}
        artboard={artboard}
        contain={contain}
        height={height}
        inputs
      ></hmh-rive>
    </GradeBandContext.Provider>
  );
};
