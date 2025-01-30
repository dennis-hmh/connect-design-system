import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { RiveEngine, RiveEngineProps } from './RiveEngine';
import { GradeBand } from '../../enum/gradeband';

import { Button } from '../Button/Button';
import { useReactStateMachineInput } from './useReactStateMachineInput';
import { Timer, TimerProps } from '../Timer/Timer';
import { timerStates } from '../Timer/TimerUtils';
import { Typography } from '../Typography/Typography';
import { useRive } from '@rive-app/react-canvas';

const meta: Meta<RiveEngineProps> = {
  title: 'Animation/Rive Engine',
  component: RiveEngine,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    gradeBand: {
      options: Object.values(GradeBand),
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<RiveEngineProps>;

const Template: StoryFn<RiveEngineProps> = (args) => {
  const riveState = useRive({
    autoplay: true,
    src: 'https://hmh-eodrisceoil.github.io/hmh-rive/rive-react-test/dist/rive/reduced_motion_test.riv',
    stateMachines: 'State Machine 1',
  }, {
    fitCanvasToArtboardHeight: true
  });

  return <RiveEngine {...args} {...riveState} />;
};

/** An example of showing a Rive animation! One special thing to note about this example is that it automatically responds to changes in the "Reduced Motion" and "Dark Mode" system preferences.
 *
 * To do this, the RiveEngine component checks if the animation's active State Machine contains any inputs with names that are reserved for accessibility features. If it does, it'll update the values of these inputs! The component handles all of this automatically, so no setup is needed and no props need be passed (though the "ignoreReducedMotion" and "ignoreDarkMode" props can be used to switch off this behaviour on a particular component instance).
 */
export const Default: Story = Template.bind({});
Default.args = {
  width: '500px',
  height: '500px',
  debug: true,
};

// TIMER TOOL EXAMPLE

type TimerToolExampleProps = TimerProps & RiveEngineProps;
type StoryTimerTool = StoryObj<TimerToolExampleProps>;

const TimerToolExample: StoryFn<TimerToolExampleProps> = (args) => {
  const countdownLength = args.time || 5000;

  const [timerState, setTimerState] = useState(timerStates.waiting_to_start);

  //Shorthands for checking the states
  const isWaiting = timerState <= timerStates.waiting_to_start;
  const isCountingDown = timerState == timerStates.counting_down;
  const isFinished = timerState == timerStates.finished;
  const isPaused = timerState >= timerStates.paused;

  const gradeBand = args.gradeBand;
  const src = getGradeBandFile_timer(gradeBand);

  const riveState = useRive({ autoplay: true, src, stateMachines: 'State Machine 1' }, {
    fitCanvasToArtboardHeight: true
  });
  useReactStateMachineInput(
    riveState.rive,
    'State Machine 1',
    'animationState',
    timerState,
    setTimerState,
  );

  const { rive } = riveState;

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

  //Watch the timerState for changes, and update the Rive input's value accordingly
  useEffect(() => {
    if (timerState === timerStates.paused) {
      rive?.pause();
    }
    if (0 <= timerState && timerState <= 2) {
      if (!rive?.isPlaying) rive?.play();
    }
  }, [timerState]);

  //Reset the timer when changing gradeband
  useEffect(() => {
    setTimerState(timerStates.waiting_to_start);
  }, [gradeBand]);

  return (
    <>
      <div key={gradeBand}>
        <div>
          <RiveEngine volume={0.5} width="400px" height="400px" {...riveState} />
        </div>

        <div style={{ width: '220px', textAlign: 'center', justifySelf: 'center' }}>
          <Timer
            time={countdownLength}
            onTimeUp={handleTimerFinish}
            parentState={timerState}
            progressBar
            gradeBand={'g4-5'}
          />
          <div style={{ padding: '7px' }}>{timerControls}</div>
        </div>
      </div>
    </>
  );
};

/** An example of how the Classcraft Timer Tool could be set up! This example is built using the RiveEngine, Button, and Timer components.
 *
 * An empty "inputs" object is defined with "useRef()" on the parent of these components – it's passed as a prop to the RiveEngine component, which automatically populates it with references to each exposed Rive State Machine Input it found in the Rive animation's active State Machine.
 *
 * This allows the parent component (or any of its children) to manipulate the internal value of the Rive inputs, affecting the animation. An importable "setRiveInputValue()"" helper function is available from the RiveEngineUtils module, simplifying the process. In this case, its arguments are:
 *
 * setRiveInputValue(timerState, 'animationState', inputs);
 *
 * Where timerState is the value to set, 'animationState' is the name of the input, and inputs is the object defined with "useRef()".
 */
export const CountdownTimerTool: StoryTimerTool = TimerToolExample.bind({});
CountdownTimerTool.args = {
  gradeBand: GradeBand.G4_5,
  time: 10000,
};

function getGradeBandFile_timer(gradeBand: GradeBand) {
  const filenames = {
    0: 'k-2-timer.riv',
    1: '3-5-timer.riv',
    2: '6-8-timer.riv',
    3: '9-12-timer.riv',
  };

  let filename = filenames[1];
  switch (gradeBand) {
    case GradeBand.G2_3:
      filename = filenames[0];
      break;
    case GradeBand.G4_5:
      filename = filenames[1];
      break;
    case GradeBand.G6_8:
      filename = filenames[2];
      break;
    case GradeBand.G9_12:
      filename = filenames[3];
      break;
  }

  const folder = 'https://hmh-eodrisceoil.github.io/hmh-rive/rive-react-test/dist/rive/';
  const filepath = folder + filename;
  return filepath;
}

//STUDENT PICKER TOOL EXAMPLE

const StudentPickerToolExample: StoryFn<RiveEngineProps & { gradeBand: GradeBand }> = (args) => {
  //RiveEngine component setup
  const riveState = useRive({
    autoplay: true,
    src: 'https://hmh-eodrisceoil.github.io/hmh-rive/rive-react-test/dist/rive/student_picker.riv',
    stateMachines: 'State Machine 1',
  }, {
    fitCanvasToArtboardHeight: true
  });
  const pickStudent = useReactStateMachineInput(riveState.rive, 'State Machine 1', 'pickStudent');
  const pickRandomStudentClicked = () => pickStudent?.fire();

  return (
    <div style={{ textAlign: 'center', justifyItems: 'center', justifySelf: 'center', width: '400px', height: '400px' }}>
      <RiveEngine {...riveState} />
      <Button primary clickHandler={pickRandomStudentClicked} additionalClass={'connect__g68'}>
        Pick Random Student
      </Button>
    </div>
  );
};

/** An example of how the Classcraft Student Picker Tool could be set up! This example uses a RiveEngine component and a Button component.
 *
 * Like the Timer Tool example, an empty "inputs" object is defined with "useRef()" on the parent component, and passed as a prop to the RiveEngine component so that the animation's internal State Machine Input objects are available.
 *
 * The Button component is then passed a simple clickHandler function as a prop – this handler calls the "setRiveInputValue" helper function, in this case telling a Rive Trigger-type Input to fire (simply by using a nonzero value as the first argument of setRiveInputValue):
 *
 *  setRiveInputValue(true, 'pickStudent', inputs);
 */
export const StudentPickerTool: Story = StudentPickerToolExample.bind({});
StudentPickerTool.args = {};

//BI-DIRECTIONAL STATE<->INPUT LINK EXAMPLE
const LinkInputValueToStateExample: StoryFn<RiveEngineProps> = (args) => {
  //The star rating state

  //RiveEngine component setup
  const riveState = useRive({
    autoplay: true,
    src: 'https://hmh-eodrisceoil.github.io/hmh-rive/rive-react-test/dist/rive/star-rating.riv',
    stateMachines: 'State Machine 1',
  }, {
    fitCanvasToArtboardHeight: true
  });
  const [ratingValue, setRatingValue] = useState(0);
  useReactStateMachineInput(
    riveState.rive,
    'State Machine 1',
    'rating',
    ratingValue,
    setRatingValue,
  );

  return (
    <div style={{ textAlign: 'center', justifyItems: 'center', justifySelf: 'center', width: '400px', height: '400px' }}>
      <Typography element="h1" family="sans" size="heading-lg" style="normal">
        <span style={{ fontSize: 'x-large' }}>{ratingValue}</span>
      </Typography>
      <RiveEngine ignoreReducedMotion={true} {...riveState} />
      <div style={{ padding: '10px' }}>
        <Button primary clickHandler={() => setRatingValue(0)} additionalClass={'connect__g68'}>
          0 Stars
        </Button>
        <Button primary clickHandler={() => setRatingValue(1)} additionalClass={'connect__g68'}>
          1 Star
        </Button>
        <Button primary clickHandler={() => setRatingValue(2)} additionalClass={'connect__g68'}>
          2 Stars
        </Button>
        <Button primary clickHandler={() => setRatingValue(3)} additionalClass={'connect__g68'}>
          3 Stars
        </Button>
        <Button primary clickHandler={() => setRatingValue(4)} additionalClass={'connect__g68'}>
          4 Stars
        </Button>
        <Button primary clickHandler={() => setRatingValue(5)} additionalClass={'connect__g68'}>
          5 Stars
        </Button>
      </div>
    </div>
  );
};

/** An example of bi-directionally linking a stateful React value to a Rive input value! (Try clicking the stars in the Rive animation: as the internal "rating" Input's value changes, the value of the parent component's stateful "ratingValue" also changes!)
 *
 * The setup is similar to previous examples: defining an empty "inputs" variable with "useRef()" and passing it to the RiveEngine component as a prop. As before, a useEffect is then created that watches a stateful value for changes, and uses that to update the internal value of the Rive input (one side of the state value -> input value connection).
 *
 * To enable the reverse connection (state value <- input value), the only extra step is to define an input-to-state linker object like this:
 *
 *   const inputToStateLinks = {
 *     rating: { setter: setRatingValue },
 *   };
 *
 * In this case, "rating" is the name of the internal Rive input, and "setRatingValue" is the React setter function for the stateful value (ratingValue). Multiple keys can be added to this object to link other inputs to other values, as needed. This "inputToStateLinks" object is then passed to the RiveEngine as a prop.
 */
export const LinkInputValueToState: Story = LinkInputValueToStateExample.bind({});
LinkInputValueToState.args = {};
