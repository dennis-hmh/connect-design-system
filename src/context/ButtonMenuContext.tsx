import React, { createContext, useState } from 'react';

type ButtonContextType = {
  clickedButtonId: string | null;
  setClickedButtonId: (id: string | null) => void;
};

export const ButtonMenuContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clickedButtonId, setClickedButtonId] = useState<string | null>(null);

  return (
    <ButtonMenuContext.Provider value={{ clickedButtonId, setClickedButtonId }}>
      {children}
    </ButtonMenuContext.Provider>
  );
};
