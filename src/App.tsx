import React from 'react';
import { Button } from './components/Button';
import { InputBox } from './components/InputBox';
import { MultipleChoiceQuestion } from './components/MultipleChoiceQuestion';
import { InputText } from './components/InputText';
import { Card } from './components/Card';
import './assets/scss/custom.scss';

const App = () => {
  return (
    <>
      <div className="connect__g45">
        <Button primary={true} children={'submitted'} correct={true} />
      </div>
      <br />
      <br />
      <div className="connect__g45" style={{ background: '#38F', padding: 20 }}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className="connect__g45">
        <Button children={'Click'} primary={true} disabled={false} />
        <br />
        <br />
        <br />
        <InputBox
          type={'checkbox'}
          id={'text-id-1'}
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
          id={'text-id-2'}
          name={'radio-name'}
          value={'The mouse rides a bike second'}
          checked={false}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <br />
        <InputBox
          type={'radio'}
          id={'text-id-3'}
          name={'radio-name'}
          value={'The mouse rides a bike first'}
          checked={false}
          disabled={false}
          correct={false}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <br />
        <MultipleChoiceQuestion
          type={'checkbox'}
          image={false}
          id={'msq-id-1'}
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
          id={'msq-id-2'}
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
          id={'msq-id-3'}
          name={'mcq-name'}
          value={'The mouse rides a bikd'}
          checked={true}
          disabled={false}
          correct={true}
          incorrect={false}
          children={'The mouse rides a bike'}
        />
        <br />
        <br />
        <InputText correct={false} incorrect={false} value={''} disabled={false} />
        <InputText correct={false} incorrect={false} value={''} number={true} />
        <br />
        <br />
        <InputText correct={true} incorrect={false} value={'correct here'} disabled={false} />
        <InputText correct={false} incorrect={true} value={'incorrect here'} disabled={false} />
        <br />
        <br />
        <InputText correct={false} incorrect={false} value={'disabled answer'} disabled={true} />
      </div>
    </>
  );
};

export default App;
