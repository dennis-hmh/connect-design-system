import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { Paper } from '../Paper/Paper';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';

export type SidebarProps = {
  children: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <ButtonMenuProvider>
      <Paper element="aside" elevation={4} className="connect__aside">
        {children}
      </Paper>
    </ButtonMenuProvider>
  );
};
