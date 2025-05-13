import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Timer, TimerProps } from './Timer';
import { timerStates } from './TimerUtils';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

import { Button } from '../Button/Button';

const meta: Meta<typeof Timer> = {
  component: Timer,
  title: 'Misc/Timer',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Timer>;

const Template: StoryFn<TimerProps & { gradeBand: GradeBand }> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={args.gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Timer {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default: Story = Template.bind({});
Default.args = {
  time: 300000,
  onTimeUp: () => console.log('Times up!'),
  size: undefined,
  className: '',
  ariaLive: 'off',
  progressBar: false,
  gradeBand: GradeBand.G4_5,
};

export const WithProgressBar: Story = Template.bind({});
WithProgressBar.args = {
  ...Default.args,
  time: 60000,
  progressBar: true,
};

/** An example of controlling the timer via its parent component's Buttons. */
export const ControlledByParentComponent: Story = {
  render: () => {
    const countdownLength = 5000;

    const [timerState, setTimerState] = useState(timerStates.waiting_to_start);

    //Shorthands for checking the states
    const isWaiting = timerState <= timerStates.waiting_to_start;
    const isCountingDown = timerState == timerStates.counting_down;
    const isFinished = timerState == timerStates.finished;
    const isPaused = timerState >= timerStates.paused;

    //State changing functions
    function handleTimerStart() {
      setTimerState(timerStates.counting_down);
      console.log('Started!');
    }
    function handleTimerFinish() {
      setTimerState(timerStates.finished);
      console.log('Finished!');
    }
    function handleTimerPause() {
      setTimerState(timerStates.paused);
      console.log('Paused!');
    }
    function handleTimerResume() {
      setTimerState(timerStates.counting_down);
      console.log('Resumed!');
    }
    function handleTimerReset() {
      setTimerState(timerStates.waiting_to_start);
      console.log('Reset!');
    }

    //Conditional controls
    let timerControls: any = null;
    const buttonStyle = 'connect__g68';
    if (isWaiting)
      timerControls = (
        <Button primary clickHandler={handleTimerStart} additionalClass={buttonStyle}>
          Start
        </Button>
      );
    else if (isCountingDown)
      timerControls = (
        <>
          <Button primary clickHandler={handleTimerReset} additionalClass={buttonStyle}>
            Reset
          </Button>
          <span> </span>
          <Button primary clickHandler={handleTimerPause} additionalClass={buttonStyle}>
            Pause
          </Button>
        </>
      );
    else if (isPaused)
      timerControls = (
        <>
          <Button primary clickHandler={handleTimerReset} additionalClass={buttonStyle}>
            Reset
          </Button>
          <span> </span>
          <Button primary clickHandler={handleTimerResume} additionalClass={buttonStyle}>
            Resume
          </Button>
        </>
      );
    else if (isFinished)
      timerControls = (
        <Button primary clickHandler={handleTimerReset} additionalClass={buttonStyle}>
          Reset
        </Button>
      );

    return (
      <>
        <div style={{ width: '220px', textAlign: 'center' }}>
          <Timer
            time={countdownLength}
            onTimeUp={handleTimerFinish}
            parentState={timerState}
            progressBar
            gradeBand={'g4-5'}
          />
          <div style={{ padding: '7px' }}>{timerControls}</div>
        </div>
      </>
    );
  },
};
