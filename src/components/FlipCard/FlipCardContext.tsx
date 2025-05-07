import { createContext, useContext } from 'react';

export type FlipCardContextContextType = {
  flip: boolean;
  toggle: (value?: boolean) => void;
  ref: React.RefObject<HTMLDivElement>;
};

export const FlipCardContext = createContext<FlipCardContextContextType | null>(null);

export function useFlipCardContext() {
  const context = useContext(FlipCardContext);
  if (!context) throw new Error('FlipCard components must be used within <FlipCard>');
  return context;
}
