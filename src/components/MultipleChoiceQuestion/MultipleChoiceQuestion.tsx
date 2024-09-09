import React, { useRef, useState } from 'react';
import { Figure } from '../Figure/Figure';
import { GradeBand } from '../../enum/gradeband';

export type MultipleChoiceQuestionProp = {
  type: 'checkbox' | 'radio';
  image: boolean;
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  answerShown?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function MultipleChoiceQuestion({
  type,
  image = false,
  id,
  name,
  children,
  checked,
  disabled,
  correct,
  incorrect,
  answerShown,
  dataTestId,
}: MultipleChoiceQuestionProp) {
  const inputStates = `${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''} ${answerShown ? 'connect__mcq-label-shown' : ''}`;

  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked || false);
  const handleChange = () => {
    setIsChecked(checkRef.current?.checked ?? false);
  };

  let inputAriaLabel = 'Multiple Choice Question';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  return (
    <div className="connect__mcq-label-wrapper">
      <input
        ref={checkRef}
        type={type}
        id={id}
        className={`connect__input ${inputStates}`}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        aria-label={inputAriaLabel}
        data-testid={dataTestId}
      />
      <label
        className={`connect__mcq-label ${image ? 'connect__mcq-card' : ''} ${inputStates}`}
        htmlFor={id}
      >
        {image ? <Figure children={children} dataTestId={dataTestId} /> : children}
      </label>
    </div>
  );
}
