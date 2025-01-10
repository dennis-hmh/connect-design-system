import React, { useState } from 'react';
import { MultipleChoiceQuestionContext } from './MultipleChoiceQuestionContext';

export const MultipleChoiceQuestionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <MultipleChoiceQuestionContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </MultipleChoiceQuestionContext.Provider>
  );
};
