import { useContext } from 'react';
import { GradeBandContext } from '../context/GradeBandContext';

export const useGradeBand = () => {
  const context = useContext(GradeBandContext);
  if (context === undefined) {
    throw new Error('useGradeBand must be used within a GradeBandProvider');
  }
  return context;
};
