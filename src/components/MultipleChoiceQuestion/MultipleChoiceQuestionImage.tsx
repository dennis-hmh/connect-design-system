import React, { useRef, useState, useEffect } from 'react';
import { Figure } from '../Figure/Figure';
import { GradeBand } from '../../enum/gradeband';

export type MultipleChoiceQuestionImageProp = {
  type: 'checkbox' | 'radio';
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

export function MultipleChoiceQuestionImage({
  type,
  id,
  name,
  children,
  checked,
  disabled,
  correct,
  incorrect,
  answerShown,
  dataTestId,
}: MultipleChoiceQuestionImageProp) {
  const inputStates = `${correct ? 'connect__feedback-correct' : ''} ${incorrect ? 'connect__feedback-incorrect' : ''} ${answerShown ? 'connect__choice-label-shown' : ''}`;

  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked || false);
  const handleChange = () => {
    setIsChecked(checkRef.current?.checked ?? false);
  };

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);

  let inputAriaLabel = 'Multiple Choice Question';
  if (correct) {
    inputAriaLabel += ', marked as correct';
  } else if (incorrect) {
    inputAriaLabel += ', marked as incorrect';
  } else if (answerShown) {
    inputAriaLabel += ', answer shown';
  }

  return (
    <div className="connect__choice-label-wrapper">
      <input
        ref={checkRef}
        type={type}
        id={id}
        className={`connect__choice ${inputStates} ${isChecked ? 'connect__choice-checked' : ''} ${disabled ? 'connect__disabled' : ''}`}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        aria-label={inputAriaLabel}
        data-testid={dataTestId}
      />
      <label
        className={`connect__choice-label connect__mcq-card ${inputStates} ${isChecked ? 'connect__label-checked' : ''} ${disabled ? 'connect__disabled' : ''}`}
        htmlFor={id}
      >
        <Figure>{children}</Figure>
      </label>
    </div>
  );
}
