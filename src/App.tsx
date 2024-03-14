import React from 'react';
import { Button } from './components/Button';
import { InputBox } from './components/InputBox';
import { MultipleChoiceQuestion } from './components/MultipleChoiceQuestion';
import { Card } from './components/Card';
import './assets/scss/custom.scss';

const App = () => {
  return (
    <>
      <div className="connect__g45" style={{ background: '#38F', padding: 20 }}>
        <Card />
        <Card />
        <Card />
      </div>
      {/* <div className="connect__g45">
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
          children={'The mouse rides a bike'}
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
          children={'The mouse rides a bike'}
        />
        <br />
        <MultipleChoiceQuestion
          type={'checkbox'}
          image={false}
          id={'msq-id'}
          name={'mcq-name'}
          value={'The mouse rides a bikd'}
          checked={true}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <MultipleChoiceQuestion
          type={'checkbox'}
          image={false}
          id={'msq-id'}
          name={'mcq-name'}
          value={'The mouse rides a bikd'}
          checked={true}
          disabled={false}
          correct={true}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <MultipleChoiceQuestion
          type={'checkbox'}
          image={true}
          id={'msq-id'}
          name={'mcq-name'}
          value={'The mouse rides a bikd'}
          checked={true}
          disabled={false}
          correct={true}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
      </div> */}
    </>
  );
};

export default App;
