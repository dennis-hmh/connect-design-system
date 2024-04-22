import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  primary: boolean;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  submit?: 'button' | 'submit';
  buttonId?: string;
  buttonRef?: React.Ref<HTMLButtonElement>; // Updated to use React.Ref for buttonRef
  ariaLabel?: string;
  eventName?: string;
  clickHandler?: Function;
  feedbackBtn?: 'feedback-button' | '';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  disabled = false,
  correct,
  incorrect,
  submit = 'button',
  buttonId,
  buttonRef,
  ariaLabel,
  eventName,
  clickHandler,
  feedbackBtn = 'feedback-button',
}) => {
  const isPrimary = primary ? 'connect__button-primary' : 'connect__button-secondary';
  const isCorrect = correct ? 'connect__button-correct' : '';
  const isIncorrect = incorrect ? 'connect__button-incorrect' : '';

  return (
    <button
      ref={buttonRef}
      id={buttonId ? buttonId : undefined}
      aria-label={ariaLabel}
      type={submit}
      className={`connect__button ${feedbackBtn} ${isPrimary} ${isCorrect} ${isIncorrect}`}
      onClick={clickHandler ? () => clickHandler(eventName) : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
