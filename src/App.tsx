import React from 'react';
import { Button } from './components';
import { InputBox } from './components/InputBox';
import './assets/scss/custom.scss';

const App = () => {
  return (
    <>
      <div className="connect__g45">
        <Button children={'Click'} primary={true} disabled={false} />
        <br />
        <br />
        <br />
        <InputBox
          type={'checkbox'}
          id={'text-id'}
          name={'text-name'}
          value={'The mouse rides a bike'}
          checked={true}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse ride a bike'}
        />
        <br />
        <InputBox
          type={'radio'}
          id={'text-id'}
          name={'text-name'}
          value={'The mouse rides a bike'}
          checked={true}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse ride a bike'}
        />
      </div>
    </>
  );
};

export default App;
