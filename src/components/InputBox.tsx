import React, { useRef, useState } from 'react';

export type InputBoxProps = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  children: React.ReactNode;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
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
  dataTestId,
}: InputBoxProps) {
  const isCorrect = correct ? 'connect__input-correct' : '';
  const isIncorrect = incorrect ? 'connect__input-incorrect' : '';

  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(checkRef.current?.checked ?? false);
  };

  return (
    <>
      <input
        ref={checkRef}
        type={type}
        id={id}
        className={`connect__input ${isCorrect} ${isIncorrect}`}
        name={name}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        data-testid={dataTestId}
      />
      <label htmlFor={id}>{children}</label>
    </>
  );
}
