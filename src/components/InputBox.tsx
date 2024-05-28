import React, { useRef, useState } from 'react';

export type InputBoxProps = {
  type: 'checkbox' | 'radio';
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
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
  checked,
  disabled,
  correct,
  incorrect,
  dataTestId,
}: InputBoxProps) {
  const inputClasses = `connect__input ${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''}`;

  const checkRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked || false);
  const handleChange = () => {
    setIsChecked(checkRef.current?.checked ?? false);
  };

  return (
    <>
      <input
        ref={checkRef}
        type={type}
        id={id}
        className={inputClasses}
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
