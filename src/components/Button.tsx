import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  primary: boolean;
  correct?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
};

export function Button({ children, primary, correct, incorrect, disabled }: ButtonProps) {
  const isPrimary = primary ? 'connect__button-primary' : 'connect__button-secondary';
  const isCorrect = correct ? 'connect__button-correct' : '';
  const isIncorrect = incorrect ? 'connect__button-incorrect' : '';

  return (
    <button
      type="button"
      className={`connect__button ${isPrimary} ${isCorrect} ${isIncorrect}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
