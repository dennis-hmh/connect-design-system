import React from 'react';
import { CCTimerToolTest } from './components/RiveEngine/RiveTest_TimerTool';
import { RiveRatingTest } from './components/RiveEngine/RiveTest_internalValueChanges';
import { RiveEngine, setRiveInputValue } from './components/RiveEngine/RiveEngine'
import { Button } from './components/Button/Button';
import './App.css';


const App: React.FC = () => {

  //Student Picker setup
  const exposedInputs_studentPicker = React.useRef();
  function pickRandomStudent(){
    setRiveInputValue(true, "pickStudent", exposedInputs_studentPicker);
  }

  return (
    <>
      <div className="group"><CCTimerToolTest/></div>
      <div className="group"><RiveEngine src="/rive/reduced_motion_test.riv" desc="Reduced motion / dark mode test (adapts to live changes)" /></div>
      <div className="group"><RiveRatingTest/></div>
      <div className="group"><RiveEngine src="/rive/student_picker.riv" inputs={exposedInputs_studentPicker} desc="Rive's Trigger-type State Machine Inputs work too!" /><Button primary clickHandler={pickRandomStudent}>Pick Random Student</Button></div>
    </>
  );
};

export default App;