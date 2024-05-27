import React, { useRef, useState } from 'react';
import { Figure } from './Figure';
import defaultImageSrc from '../assets/scss/images/zelda.jpeg';

export type MultipleChoiceQuestionImageProp = {
  type: 'checkbox' | 'radio';
  image: boolean;
  id: string;
  name: string;
  children: React.ReactNode;
  disabled?: boolean;
  answerShown?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  imageSrc?: string;
  imageCaption?: string;
  dataTestId?: string;
};

export function MultipleChoiceQuestionImage({
  type,
  image,
  id,
  name,
  children,
  disabled,
  correct,
  incorrect,
  answerShown,
  imageSrc,
  imageCaption,
  dataTestId,
}: MultipleChoiceQuestionImageProp) {
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

  return (
    <div className="connect__mcq-label-wrapper">
      <input
        ref={checkRef}
        type={type}
        id={id}
        className={`connect__input ${isCorrect} ${isIncorrect} ${isAnswerShown}`}
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
        className={`connect__mcq-label connect__mcq-card ${isCorrect} ${isIncorrect} ${isAnswerShown}`}
        htmlFor={id}
      >
        {image ? (
          <Figure
            altText={`Image for ${name}`}
            imageSrc={imageSrc || defaultImageSrc}
            imageCaption={imageCaption || ''}
            dataTestId={dataTestId}
          />
        ) : (
          children
        )}
      </label>
    </div>
  );
}
