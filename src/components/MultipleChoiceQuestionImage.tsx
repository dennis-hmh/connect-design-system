import React from 'react';
import imageSrc from '../assets/scss/images/zelda.jpeg';

export type MultipleChoiceQuestionProp = {
  type: 'checkbox' | 'radio';
  image: boolean;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  disabled: boolean;
  correct: boolean;
  incorrect: boolean;
  children: React.ReactNode;
};

export function MultipleChoiceQuestionImage({
  type,
  image,
  id,
  name,
  value,
  checked,
  disabled,
  correct,
  incorrect,
  children,
}: MultipleChoiceQuestionProp) {
  const isCorrect = correct ? 'connect__input-correct' : '';
  const isIncorrect = incorrect ? 'connect__input-incorrect' : '';

  return (
    <>
      <input
        type={type}
        id={id}
        className={`mcq connect__input ${isCorrect} ${isIncorrect}`}
        name={name}
        value={value}
        defaultChecked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>{image ? <img src={imageSrc} /> : children}</label>
    </>
  );
}
