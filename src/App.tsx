import React from 'react';
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
      <div className="group"><RiveEngine src="/rive/student_picker.riv" inputs={exposedInputs_studentPicker} desc="Rive's Trigger-type State Machine Inputs work too!" /><Button primary clickHandler={pickRandomStudent}>Pick Random Student</Button></div>
    </>
  );
};

export default App;