import React, { useRef, useEffect } from 'react';
import { Timer, timerStates } from '../Timer/Timer';
import { Button } from '../Button/Button';
import { RiveEngine, setRiveInputValue } from './RiveEngine';

/** Testing out an approach for sharing data between the Timer Tool's various components */
export function CCTimerToolTest(){

    const countdownLength = 5000;
    //const countdownLength = 60000;
    //const countdownLength = 3600000;

    //The countdown timer's state
    const [timerState, setTimerState] = React.useState(timerStates.waiting_to_start);

    //Shorthands for checking the states
    const isWaiting =       timerState <= timerStates.waiting_to_start;
    const isCountingDown =  timerState == timerStates.counting_down;
    const isFinished =      timerState == timerStates.finished;
    const isPaused =        timerState >= timerStates.paused;

    const rivePlayState = isPaused ? "paused" : "playing";

    /** Used to make the RiveEngine's inputs accessible by any child component of this top-level Tool component! 
     *  When the RiveEngine component loads the .riv, it will automatically turn this empty ref variable into an object,
     *  with one key for each StateMachineInput found in the Rive animation's active State Machine.
     * 
     *  You can then use the RiveEngine's exported "setRiveInputValue" function to work with the
     *  the populated "inputs" ref object in a (hopefully easy and convenient) way!
     * 
     *  ("useRef" might be appropriate vs. "useContext", since apparently useRef doesn't request a 
     *  rerendering of the component, which might be good since we're not changing anything DOM-related
     *  when populating the object with RiveInputs or editing a RiveInput's internal value) */
    const inputs = useRef();

    //Watch timerState's value for changes, and update the RiveEngine input's value accordingly
    useEffect(() => {
        if (0 <= timerState && timerState <= 2)
            setRiveInputValue(timerState, 'animationState', inputs);
    }, [timerState]);

    //State changing functions
    function handleTimerStart() {
        setTimerState(timerStates.counting_down);
        console.log("Started!");
    }
    function handleTimerFinish() {
        setTimerState(timerStates.finished);
        console.log("Finished!");
    }
    function handleTimerPause() {
        setTimerState(timerStates.paused);
        console.log("Paused!");
    }
    function handleTimerResume() {
        setTimerState(timerStates.counting_down);
        console.log("Resumed!");
    }
    function handleTimerReset() {
        setTimerState(timerStates.waiting_to_start);
        console.log("Reset!");
    }

    //Conditional controls
    let timerControls: any = null;
    if (isWaiting)
        timerControls = (
            <Button primary clickHandler={handleTimerStart} additionalClass="big">Start Timer</Button>
        );
    else if (isCountingDown)
        timerControls = (
        <>
            <Button primary clickHandler={handleTimerReset} additionalClass="big">Reset</Button>
            <Button primary clickHandler={handleTimerPause} additionalClass="big">Pause</Button>
        </>
        );
    else if (isPaused)
        timerControls = (
        <>
            <Button primary clickHandler={handleTimerReset} additionalClass="big">Reset</Button>
            <Button primary clickHandler={handleTimerResume} additionalClass="big">Resume</Button>
        </>
        );
    else if (isFinished)
        timerControls = (
            <Button primary clickHandler={handleTimerReset} additionalClass="big">Reset</Button>
        );

    const debugControls = (
    <>
    <hr></hr>
    <div>
        <Button primary clickHandler={() => setTimerState(timerStates.waiting_to_start)}>Waiting</Button>
        <Button primary clickHandler={() => setTimerState(timerStates.counting_down)}>Counting Down</Button>
        <Button primary clickHandler={() => setTimerState(timerStates.finished)}>Finished</Button>
        <Button primary clickHandler={() => setTimerState(timerStates.paused)}>Paused</Button>
    </div>
    </>
    );

    //Testing the generic Timer component still works the same as before
    const testingGenericTimer = (
    <>
        <hr></hr>
        <p>Making sure the generic Timer component still works the same way as before when my new optional "parentState" prop isn't provided to it (i.e. the countdown starts automatically):</p>
        <Timer time={countdownLength} onTimeUp={() => console.log("Basic timer finished!")} progressBar/>
    </>    
    );

    //Documentation
    const codeSnippet = `useEffect(() => {
    if (0 <= timerState && timerState <= 2)
        setRiveInputValue(timerState, 'myInput', inputs);
}, [timerState]);
`;
    const documentation = (
    <>
        <hr></hr>
        <h2>Overview</h2>
        <p>A proof-of-concept for the Countdown Timer tool, solely built from React components! It's structured like this:</p>
            <ul>
                <li>
                    A parent component, responsible for the overall behaviour
                    <ul>
                        <li>A generic "Timer" component<br />(Showing the remaining time & progress bar)</li>
                        <li>Various "Button" components<br />(Providing controls for start/pause/resume/reset)</li>
                        <li>A "RiveEngine" component<br />(Showing the fancy timer design & animation!)</li>
                    </ul>
                </li>
            </ul>
        <hr></hr>
        <h2>Main functionality</h2>
        <p>The parent component has a "timerState" value, defined using React.useState(). "timerState" is the main thing driving the logic of this group of components, and it decides what control buttons to show!</p>
            <ul>
                <li>The value of "timerState" can change manually (by user-interaction) when the control buttons are pressed. The Buttons change the value of "timerState" using an onClick function that was passed in as a prop.</li>
                <li>The value of "timerState" also changes automatically when the generic Timer component's countdown reaches zero! This is done by passing "timerState"'s setter function in as an optional prop on the generic Timer component (which is then called via a useEffect())</li>
            </ul>
        <p>That's the main functionality of the Timer Tool covered, but we also need to handle the visual (Rive animation) aspect.</p>
        <hr></hr>
        <h2>Controlling a Rive animation</h2>
        <h3>What data do we need to update?</h3>
        <p>The RiveEngine component displays an artboard from a Rive file (.riv)! This artboard is animated by an internal State Machine created by the animators in Rive's editor software. A State Machine can have Input objects (think of them as variables), whose values can cause the State Machine to conditionally flow and branch in different ways.</p>
        <p>There are currently 3 different types of Rive StateMachineInputs: Numbers, Booleans, and Triggers - but they're all essentially the same (a Trigger is sort of like a Boolean that automatically resets to False after its value is set to True - while making the State Machine flow into any nearby condition that required its value to be True).</p>
        <p>In the case of the Countdown Timer's file, the animators have given the Artboard's State Machine a Number Input named "animationState". The State Machine will animate the clock in different ways depending on the current value of "animationState":</p>
        <ul>
            <li>0: the clock hand stays at 12-o'-clock</li>    
            <li>1: the clock hand counts on from 12-o'-clock</li>    
            <li>2: the clock hand stops & the clock bounces</li>
        </ul>
        <p>The React implementation of the Timer tool needs to update the value of this internal Rive Input object so that the animation's visuals align with the current state of the tool's main functional aspects.</p>
        <h3>Getting React to update the data!</h3>
        <p>To do this, the parent component first creates an empty "inputs" object using "useRef()".</p>
        <p>The parent component passes this empty "inputs" object to the RiveEngine child component, as a prop. When the RiveEngine component loads the .riv file, it then automatically populates the "inputs" object with keys, one for each Input it found in the State Machine.</p>
        <p>A key's name is the name of the internal State Machine Input, and the key's value is a reference to the actual internal State Machine Input object.</p>
        <p>This is handy, because we can now directly call one of the State Machine Input object's setter methods, which has an immediate effect on the Rive animation!</p>
        <p>In the case of the Countdown Timer, the "inputs" object would end up like this after the RiveEngine loads the .riv:</p>

        <ul className="code">
            <li>&#123;</li>
                <ul>
                    <li>current: &#123;</li>
                    <ul>
                        <li>animationState: <i>RiveStateMachineInput</i>,</li>
                    </ul>
                    <li>&#125;</li>
                </ul>
            <li>&#125;</li>
        </ul>

        <p>With the inputs accessible, it's now possible for the parent component to edit the value of a particular Rive input using the "setRiveInputValue" helper function (which can be imported from the RiveEngine module):</p>

        <ul className="code">
            <li>setRiveInputValue(newValue, "myInput", inputs);</li>
        </ul>

        <p>This function's arguments are: the value to set, the name of the input, and the "inputs" object that was defined with "useRef()".</p>
        <p>Trigger-type Rive Inputs are handled by this function too! If you try to set a nonzero value on them, it will be interpretted as a request to fire() the input.</p>
        <p>Now to make use of that function! In the Timer Tool's case, we could modify the "Start Timer" / "Reset" / "Pause" / "Resume" control Buttons' onClick functions so that they call "setRiveInputValue" and set an appropriate value on the input.</p>
        <p>A different approach (which I'm using on this test page) could be to create a useEffect() that watches the parent component's main state value (which determines what buttons to render) for changes, and updates the Rive input appropriately:</p>

        <pre className="code">{codeSnippet}</pre>

        <p>Now the Rive's inputs match the state of the Timer - yay! It should be possible to use this approach for dynamically handling the inputs of any Rive – there's another example with the Student Picker further down this test page!</p>

        <hr></hr>

        <p><b>NOTE:</b> the animator can hide certain State Machine Inputs by prefixing their internal name with "_". This prevents them from being exposed onto "inputs" as a key! This is handy if the animator only wants to expose State Machine Inputs that're intended to be controlled externally by the React code.</p>
        <p><b>NOTE:</b> It's likely possible to use React's "useContext" features as an alternate approach for handling the inputs, but I believe there are advantages in using "useRef". Apparently "useRef" doesn't necessarily require a refresh of the React component when its value is changed, which could be useful since changes to an internal Rive input value often won't involve any DOM-related changes (for example passing the current hour value to a Rive Number input, so animators can make the sky in an animation reflect the current time of day).</p>
    </>    
    );

    //Swap between gradebanded RIVs, just for quick testing
    const filenames = {
        0: "3-5-timer.riv", //NOTE: the 3-5 version is temporarily used for K-2 too!
        1: "3-5-timer.riv",
        2: "6-8-timer.riv",
        3: "9-12-timer.riv",
    }
    const [gradeBandValue, setGradeBandValue] = React.useState(1);
    const filename = filenames[gradeBandValue];

    function handleGradeChange(e){
        setGradeBandValue(e.target.value);
    }

    const select = (
    <>
        <select value={gradeBandValue} onChange={handleGradeChange}>
            <option value="0">Grades K-to-2</option>
            <option value="1">Grades 3-to-5</option>
            <option value="2">Grades 6-to-8</option>
            <option value="3">Grades 9-to-12</option>
        </select>
    </>
    );

    //Main component elements
    return (
    <>
        {select}
        <RiveEngine key={gradeBandValue} src={"/rive/" + filename} volume={0.5} inputs={inputs} playState={rivePlayState}/>
        <Timer time={countdownLength} onTimeUp={handleTimerFinish} parentState={timerState} progressBar/>
        {timerControls}
        {debugControls}
        {documentation}
        {testingGenericTimer}
    </>
    );
}