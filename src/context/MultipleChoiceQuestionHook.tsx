import { useContext } from 'react';
import { MultipleChoiceQuestionContext } from './MultipleChoiceQuestionContext';

export const useMultipleChoiceQuestion = () => {
  const context = useContext(MultipleChoiceQuestionContext);
  if (!context) {
    throw new Error(
      'useMultipleChoiceQuestion must be used within a MultipleChoiceQuestionProvider',
    );
  }
  return context;
};
