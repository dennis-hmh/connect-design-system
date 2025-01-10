import { createContext } from 'react';

type MultipleChoiceQuestionContextType = {
  selectedValue: string | null;
  setSelectedValue: (value: string) => void;
};

export const MultipleChoiceQuestionContext = createContext<
  MultipleChoiceQuestionContextType | undefined
>(undefined);
