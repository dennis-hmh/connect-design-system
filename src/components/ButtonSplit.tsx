import React from 'react';

export type ButtonSplitProps = {
  childrenOne: React.ReactNode;
  childrenTwo: React.ReactNode;
  primary: boolean;
  correct?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
};

export function ButtonSplit({
  childrenOne,
  childrenTwo,
  primary,
  correct,
  incorrect,
  disabled,
}: ButtonSplitProps) {
  const isPrimary = primary ? 'connect__button-primary' : 'connect__button-secondary';
  const isCorrect = correct ? 'connect__button-correct' : '';
  const isIncorrect = incorrect ? 'connect__button-incorrect' : '';

  return (
    <div className={`connect__button-split ${isPrimary} ${isCorrect} ${isIncorrect}`}>
      <button type="button" className={``} disabled={disabled}>
        {childrenOne}
      </button>
      <button type="button" className={``} disabled={disabled}>
        {childrenTwo}
      </button>
      <ul>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
    </div>
  );
}
