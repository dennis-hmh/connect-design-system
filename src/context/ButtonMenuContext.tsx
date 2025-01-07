/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState } from 'react';

type ButtonContextType = {
  clickedButtonId: string | undefined;
  setClickedButtonId: (id: string | undefined) => void;
};

export const ButtonMenuContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clickedButtonId, setClickedButtonId] = useState<string | undefined>(undefined);

  return (
    <ButtonMenuContext.Provider value={{ clickedButtonId, setClickedButtonId }}>
      {children}
    </ButtonMenuContext.Provider>
  );
};
