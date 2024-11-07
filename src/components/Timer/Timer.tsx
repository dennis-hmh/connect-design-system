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
  ariaLive = 'assertive',
  progressBar = false,
  dataTestId,
}) => {
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

  const hours: number = Math.floor(remainingTime / 3600000);
  const minutes: number = Math.floor((remainingTime / 60000) % 60);
  const seconds: number = Math.floor((remainingTime % 60000) / 1000);

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

  const percentage = ((remainingTime / time) * 100).toFixed(1);

  return (
    <div
      className={`connect__timer-wrapper ${className ? className : ''}`}
      style={typoProps}
      data-testid={dataTestId}
    >
      <div
        className="connect__timer"
        role="timer"
        aria-live={ariaLive}
        data-percentage={percentage}
      >
        {formattedTime}
      </div>
      {progressBar && <ProgressBar value={parseFloat(percentage)} max={100} />}
    </div>
  );
};
