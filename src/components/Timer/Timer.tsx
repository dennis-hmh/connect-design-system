import React, { useState, useEffect, useRef } from 'react';
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
  size: Size;
  className?: string;
  ariaLive?: 'polite' | 'assertive' | 'off';
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Timer: React.FC<TimerProps> = ({
  time,
  onTimeUp,
  size,
  className,
  ariaLive,
  dataTestId,
}) => {
  const [remainingTime, setRemainingTime] = useState(time);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(intervalRef.current!);
          onTimeUp();
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

  const hours = Math.floor(remainingTime / 3600000);
  const minutes = Math.floor(remainingTime / 60000) % 60;
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  const formattedTime = hours
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  let typoProps: React.CSSProperties = {};

  if (size) {
    typoProps = {
      '--connect__timer-fs': `var(--connect__${size})`,
      '--connect__timer-lh': `var(--connect__${size}-lheight)`,
    };
  }

  return (
    <time
      className={`connect__timer ${className ? className : ''}`}
      aria-live={ariaLive}
      data-testid={dataTestId}
      style={typoProps}
    >
      {formattedTime}
    </time>
  );
};
