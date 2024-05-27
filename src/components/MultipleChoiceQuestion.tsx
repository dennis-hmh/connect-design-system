import React, { useRef, useState } from 'react';
import imageSrc from '../assets/scss/images/zelda.jpeg';

export type MultipleChoiceQuestionProp = {
  type: 'checkbox' | 'radio';
  image: boolean;
  id: string;
  name: string;
  children: React.ReactNode;
  disabled?: boolean;
  readonly?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;

  dataTestId?: string;
};

export function MultipleChoiceQuestion({
  type,
  image,
  id,
  name,
  children,
  disabled,
  correct,
  incorrect,
  answerShown,
  dataTestId,
}: MultipleChoiceQuestionProp) {
  const isCorrect = correct ? 'connect__mcq-label-correct' : '';
  const isIncorrect = incorrect ? 'connect__mcq-label-incorrect' : '';
  const isAnswerShown = answerShown ? 'connect__mcq-label-shown' : '';

  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
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

  //const shouldBeReadOnly = correct || incorrect || answerShown;

  return (
    <div className="connect__mcq-label-wrapper">
      <input
        ref={checkRef}
        type={type}
        id={id}
        className="connect__input"
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        aria-label={`Input field${correct ? ', marked as correct' : ''}
        ${incorrect ? ', marked as incorrect' : ''}
        ${answerShown ? ', answer shown' : ''}`}
        data-testid={dataTestId}
      />
      <label
        className={`connect__mcq-label ${isCorrect} ${isIncorrect} ${isAnswerShown}`}
        htmlFor={id}
      >
        {image ? <img src={imageSrc} /> : children}
      </label>
    </div>
  );
}
