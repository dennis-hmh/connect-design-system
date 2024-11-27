import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
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
  progressBar?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
  parentState?: number;
};

export enum timerStates {
  waiting_to_start,
  counting_down,
  finished,
  paused,
}

interface CustomCSSProperties extends React.CSSProperties {
  '--connect__timer-fs'?: string;
  '--connect__timer-lh'?: string;
}

export const Timer: React.FC<TimerProps> = ({
  time,
  onTimeUp,
  size,
  className,
  ariaLive = 'off',
  progressBar = false,
  dataTestId,
  parentState,
}) => {
  const [remainingTime, setRemainingTime] = useState(time);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  //Time calculation-related variables
  const countdownStartedAt: MutableRefObject<null | number> = useRef(null);
  const countdownPausedAt: MutableRefObject<null | number> = useRef(null);
  const countdownTotalTimeSpentPaused: MutableRefObject<number> = useRef(0);

  //If the Timer component isn't being controlled by a parentState prop, start the countdown automatically as before
  const initialStateValue = parentState == undefined ? 1 : parentState;
  const [componentState, setComponentState] = useState(initialStateValue);

  const isWaiting = componentState == timerStates.waiting_to_start;
  const isCountingDown = componentState == timerStates.counting_down;
  const isFinished = componentState == timerStates.finished;
  const isPaused = componentState == timerStates.paused;

  /* Watch for changes in this Timer component's state */
  useEffect(() => {
    //When entering the waiting state, reset the countdown's progress
    if (isWaiting) {
      setRemainingTime(time);
    }

    /* Call the onTimeUp function, if one was provided 
      (It's important to do this here via a useEffect rather than in the countdown's setInterval, so the onTimeUp function
      can potentially change the state of the parent component, without causing a bad setState() call) */
    if (isFinished) {
      setRemainingTime(0);

      if (onTimeUp && onTimeUp instanceof Function) onTimeUp();
    }
  }, [componentState]);

  /* If the parent's state value was provided, make any changes in its value update the state of this Timer component */
  useEffect(() => {
    if (parentState == undefined) return;

    //Update this component's state based on the parent's state (only allowing values that actually represent something)
    const clampedValue = Math.max(Math.min(parentState, 3), 0);
    setComponentState(clampedValue);
  }, [parentState, componentState]);

  //Countdown behaviour
  const updateInterval = 1000;
  useEffect(() => {
    //If the timer isn't counting down or paused, reset anything to do with calculating the remaining time
    if (isWaiting || isFinished) {
      countdownTotalTimeSpentPaused.current = 0;
      countdownStartedAt.current = null;
      countdownPausedAt.current = null;
    }

    //Handle pausing
    if (isPaused) {
      if (!countdownPausedAt.current) countdownPausedAt.current = Date.now();
    } else if (countdownPausedAt.current != null) {
      countdownTotalTimeSpentPaused.current += Date.now() - countdownPausedAt.current;
      countdownPausedAt.current = null;
    }

    //Handle counting down
    if (!isCountingDown) return;

    if (countdownStartedAt.current == null) countdownStartedAt.current = Date.now();

    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (countdownStartedAt.current == null) return time;

        const newTime =
          time - (Date.now() - countdownStartedAt.current - countdownTotalTimeSpentPaused.current);

        if (newTime <= 0 || prevTime <= 0) {
          clearInterval(intervalRef.current!);
          setComponentState(timerStates.finished);
          return 0;
        }

        return newTime;
      });
    }, updateInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [time, onTimeUp, componentState]);

  //Watch for changes in countdown length
  useEffect(() => {
    setRemainingTime(time);
  }, [time]);

  //Quantise the progress wrt. the update interval
  const nearestMultiple = Math.max(0, Math.round(remainingTime / updateInterval) * updateInterval);
  const roundingCorrection = Math.ceil(Math.round(nearestMultiple - updateInterval / 3) / 1000);

  //Calculate h/m/s for the time string
  const hours = Math.floor(roundingCorrection / 360);
  const minutes = Math.floor(roundingCorrection / 60) % 60;
  const seconds = roundingCorrection % 60;

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

  const percentage = ((nearestMultiple / time) * 100).toFixed(1);

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
        aria-label={`Time remaining: ${formattedTime}`}
        data-percentage={percentage}
      >
        {formattedTime}
      </div>
      {progressBar && (
        <ProgressBar
          value={parseFloat(percentage)}
          max={100}
          ariaLabel={`Progress: ${percentage}%`}
        />
      )}
    </div>
  );
};
