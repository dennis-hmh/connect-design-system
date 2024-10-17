import React, { createContext, useContext, useState } from 'react';

type ButtonContextType = {
  clickedButtonId: string | null;
  setClickedButtonId: (id: string | null) => void;
};

const ButtonMenuContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);

  return (
    <ButtonMenuContext.Provider value={{ clickedButtonId, setClickedButtonId }}>
      {children}
    </ButtonMenuContext.Provider>
  );
};

export const useButtonMenuContext = () => {
  const context = useContext(ButtonMenuContext);
  if (!context) {
    throw new Error('useButtonMenuContext must be used within a ButtonMenuProvider');
  }
  return context;
};
