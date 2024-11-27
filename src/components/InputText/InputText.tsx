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
  const [text, setText] = useState(defaultText);
  const [isSelected, setIsSelected] = useState(false);

  const inputStates = `${correct ? 'connect__feedback-correct' : ''} ${incorrect ? 'connect__feedback-incorrect' : ''} ${answerShown ? 'connect__feedback-shown' : ''} ${isSelected ? 'connect__selected' : ''}`;

  const isNumber = number ? 'number' : 'text';

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
    <label className="connect__icon-wrapper">
      <input
        type={isNumber}
        className={`connect__input ${inputStates} ${disabled ? 'connect__disabled' : ''}`}
        disabled={shouldBeDisabled}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onMouseDown={() => setIsSelected(true)}
        onBlur={() => setIsSelected(false)}
        aria-label={inputAriaLabel}
        data-testid={dataTestId}
      />
    </label>
  );
}
