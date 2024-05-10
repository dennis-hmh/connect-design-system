import React from 'react';
import '../assets/css/button.css';

export type ButtonProps = {
  children: React.ReactNode;
  primary: boolean;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  submit?: 'button' | 'submit';
  clickHandler?: any;
  dataTestId?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  disabled = false,
  correct,
  incorrect,
  submit = 'button',
  clickHandler,
  dataTestId,
}) => {
  const isPrimary = primary ? 'connect__button-primary' : 'connect__button-secondary';
  const isCorrect = correct ? 'connect__button-correct' : '';
  const isIncorrect = incorrect ? 'connect__button-incorrect' : '';

  return (
    <button
      type={submit}
      className={`connect__button ${isPrimary} ${isCorrect} ${isIncorrect}`}
      onClick={clickHandler}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};
