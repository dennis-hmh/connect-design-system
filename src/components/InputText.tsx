import React from 'react';
//import { useState } from 'react';

export type InputTextProps = {
  correct: boolean;
  incorrect: boolean;
  value: string;
  number?: boolean;
  disabled?: boolean;
};

export function InputText({ correct, incorrect, value, number, disabled }: InputTextProps) {
  const isCorrect = correct ? 'connect__input-correct' : '';
  const isIncorrect = incorrect ? 'connect__input-incorrect' : '';
  const isNumber = number ? 'number' : 'text';

  //const [text, setText] = useState('');

  return (
    <label className="status">
      <input
        type={isNumber}
        className={`connect__input ${isCorrect} ${isIncorrect}`}
        defaultValue={value}
        disabled={disabled}
        //value={text}
        //onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
