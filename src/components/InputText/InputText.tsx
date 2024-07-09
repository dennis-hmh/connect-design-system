import React from 'react';
import { useState } from 'react';

export type InputTextProps = {
  correct: boolean;
  incorrect: boolean;
  answerShown?: boolean;
  number?: boolean;
  disabled?: boolean;
  dataTestId?: string;
};

export function InputText({
  correct,
  incorrect,
  answerShown,
  number,
  disabled,
  dataTestId,
}: InputTextProps) {
  const isCorrect = correct ? 'connect__input-correct' : '';
  const isIncorrect = incorrect ? 'connect__input-incorrect' : '';
  const isAnswerShown = answerShown ? 'connect__input-shown' : '';
  const isNumber = number ? 'number' : 'text';

  const [text, setText] = useState('');

  let inputAriaLabel = 'Input field';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  const shouldBeDisabled = correct || incorrect || answerShown || disabled;

  return (
    <label className={`connect__icon-wrapper ${isCorrect} ${isIncorrect} ${isAnswerShown}`}>
      <input
        type={isNumber}
        className={`connect__input ${isCorrect} ${isIncorrect} ${isAnswerShown}`}
        disabled={shouldBeDisabled}
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label={`Input field${correct ? ', marked as correct' : ''}
        ${incorrect ? ', marked as incorrect' : ''}
        ${answerShown ? ', answer shown' : ''}`}
        data-testid={dataTestId}
      />
    </label>
  );
}
