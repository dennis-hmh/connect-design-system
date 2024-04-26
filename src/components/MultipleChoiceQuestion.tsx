import React, { useState } from 'react';
import imageSrc from '../assets/scss/images/zelda.jpeg';

export type MultipleChoiceQuestionProp = {
  type: 'checkbox' | 'radio';
  image: boolean;
  id: string;
  name: string;
  disabled: boolean;
  correct: boolean;
  incorrect: boolean;
  children: React.ReactNode;
};

export function MultipleChoiceQuestion({
  type,
  image,
  id,
  name,
  disabled,
  correct,
  incorrect,
  children,
}: MultipleChoiceQuestionProp) {
  const isCorrect = correct ? 'connect__input-correct' : '';
  const isIncorrect = incorrect ? 'connect__input-incorrect' : '';

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <input
        type={type}
        id={id}
        className={`mcq connect__input ${isCorrect} ${isIncorrect}`}
        name={name}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        disabled={disabled}
      />
      <label htmlFor={id}>{image ? <img src={imageSrc} /> : children}</label>
    </>
  );
}
