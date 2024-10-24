import { createContext, useContext } from 'react';
import { GradeBand } from '../enum/gradeband';

export const GradeBandContext = createContext<GradeBand | undefined>(undefined);

export const useGradeBand = () => {
  const context = useContext(GradeBandContext);
  if (context === undefined) {
    throw new Error('useGradeBand must be used within a GradeBandProvider');
  }
  return context;
};
