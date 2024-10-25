import React from 'react';
import { GradeBandContext } from '../../context/GradeBandContext';
import { GradeBand } from '../../enum/gradeband';
import '@connect/hmh-rive';

export type RiveGradeBandedProps = {
  gradeBand?: GradeBand;
  srcDefault?: string;
  src23?: string;
  src45?: string;
  src68?: string;
  src912?: string;
  descDefault?: string;
  desc23?: string;
  desc45?: string;
  desc68?: string;
  desc912?: string;
  stateMachine?: string;
  artboard?: string;
  autoplay?: boolean;
  hidePlayPause?: boolean;
  playState?: string;
  contain?: boolean;
  height?: boolean;
};

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
}) => {
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

  return (
    <GradeBandContext.Provider value={gradeBand}>
      <hmh-rive
        src={finalRiveSrc}
        desc={finalAltText}
        autoplay={autoplay}
        play-state={playState}
        hidePlayPause={hidePlayPause}
        stateMachine={stateMachine}
        artboard={artboard}
        contain={contain}
        height={height}
      ></hmh-rive>
    </GradeBandContext.Provider>
  );
};
