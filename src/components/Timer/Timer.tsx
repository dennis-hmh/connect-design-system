/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { GradeBand } from 'src/enum/gradeband';

type Size =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'caption'
  | 'credits';

export type TimerProps = {
  time: number;
  onTimeUp?: () => void;
  size?: Size;
  className?: string;
  ariaLive?: 'polite' | 'assertive' | 'off';
  progressBar?: boolean | undefined;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

interface CustomCSSProperties extends React.CSSProperties {
  '--connect__timer-fs'?: string;
  '--connect__timer-lh'?: string;
}

export const Timer: React.FC<TimerProps> = ({
  time,
  onTimeUp,
  size,
  className,
  ariaLive,
  progressBar = false,
  dataTestId,
}) => {
  // Validate the time prop
  // if (isNaN(time)) {
  //   throw new Error('Invalid time prop');
  // }

  const [remainingTime, setRemainingTime] = useState(time);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(intervalRef.current!);
          if (onTimeUp) {
            onTimeUp();
          }
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [time, onTimeUp]);

  useEffect(() => {
    setRemainingTime(time);
  }, [time]);

  // Debugging: Log remainingTime
  console.log('remainingTime:', remainingTime);

  const hours = Math.floor(remainingTime / 3600000);
  const minutes = Math.floor((remainingTime % 3600000) / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  // Debugging: Log calculated time values
  //console.log('hours:', hours, 'minutes:', minutes, 'seconds:', seconds);

  const formattedTime = hours
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  let typoProps: CustomCSSProperties = {};

  if (size) {
    typoProps = {
      '--connect__timer-fs': `var(--connect__${size})`,
      '--connect__timer-lh': `var(--connect__${size}-lheight)`,
    };
  }

  return (
    <div
      className={`connect__timer-wrapper ${className ? className : ''}`}
      style={typoProps}
      data-testid={dataTestId}
    >
      <time className="connect__timer" aria-live={ariaLive}>
        {formattedTime}
      </time>
      {progressBar && <ProgressBar value={(remainingTime / time) * 100} max={100} />}
    </div>
  );
};
