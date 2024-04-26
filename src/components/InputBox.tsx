import React, { useState } from 'react';

export type InputBoxProps = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  disabled: boolean;
  correct: boolean;
  incorrect: boolean;
  children: React.ReactNode;
};

export function InputBox({
  type,
  id,
  name,
  disabled,
  correct,
  incorrect,
  children,
}: InputBoxProps) {
  const isCorrect = correct ? 'connect__input-correct' : '';
  const isIncorrect = incorrect ? 'connect__input-incorrect' : '';

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <input
        type={type}
        id={id}
        className={`connect__input ${isCorrect} ${isIncorrect}`}
        name={name}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        disabled={disabled}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
}
