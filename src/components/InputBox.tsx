import React, { useRef, useState } from 'react';

export type InputBoxProps = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  children: React.ReactNode;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  answerShown?: boolean;
  dataTestId?: string;
};

export function InputBox({
  type,
  id,
  name,
  children,
  disabled,
  correct,
  incorrect,
  answerShown,
  dataTestId,
}: InputBoxProps) {
  const isCorrect = correct ? 'connect__input-correct' : '';
  const isIncorrect = incorrect ? 'connect__input-incorrect' : '';
  const isAnswerShown = answerShown ? 'connect__mcq-label-shown' : '';

  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(checkRef.current?.checked ?? false);
  };

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
        data-testid={dataTestId}
      />
      <label
        className={`connect__mcq-label ${isCorrect} ${isIncorrect} ${isAnswerShown}`}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}
