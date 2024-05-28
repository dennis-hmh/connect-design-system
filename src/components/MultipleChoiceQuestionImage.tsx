import React, { useRef, useState } from 'react';
import imageSrc from '../assets/scss/images/zelda.jpeg';

export type MultipleChoiceQuestionImageProp = {
  type: 'checkbox' | 'radio';
  image: boolean;
  id: string;
  name: string;
  children: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  dataTestId?: string;
};

export function MultipleChoiceQuestionImage({
  type,
  image = true,
  id,
  name,
  children,
  checked,
  disabled,
  correct,
  incorrect,
  dataTestId,
}: MultipleChoiceQuestionImageProp) {
  const inputClasses = `mcq connect__input ${correct ? 'connect__input-correct' : ''} ${incorrect ? 'connect__input-incorrect' : ''}`;

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
      <label htmlFor={id}>{image ? <img src={imageSrc} /> : children}</label>
    </>
  );
}
