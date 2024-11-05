import { useContext } from 'react';
import { ButtonMenuContext } from '../context/ButtonMenuContext';

export const useButtonMenuContext = () => {
  const context = useContext(ButtonMenuContext);
  if (context === undefined) {
    throw new Error('useButtonMenuContext must be used within a ButtonMenuProvider');
  }
  return context;
};
