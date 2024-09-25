// @ts-ignore: React is used implicitly in JSX
import React, { useState } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type InputTextProps = {
  correct: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  number?: boolean;
  disabled?: boolean;
  defaultText?: string | number;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function InputText({
  correct,
  incorrect,
  answerShown,
  number,
  disabled,
  defaultText,
  dataTestId,
}: InputTextProps) {
  const inputStates = `${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''} ${answerShown ? 'connect__input-shown' : ''}`;

  const isNumber = number ? 'number' : 'text';

  const [text, setText] = useState(defaultText);

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
    <label className={`connect__icon-wrapper ${inputStates}`}>
      <input
        type={isNumber}
        className={`connect__input ${inputStates}`}
        disabled={shouldBeDisabled}
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label={inputAriaLabel}
        data-testid={dataTestId}
      />
    </label>
  );
}
