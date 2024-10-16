import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { ButtonMenuProvider } from '../../context/ButtonMenuContext';

export type SidebarProps = {
  children: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Sidebar: React.FC<SidebarProps> = ({ children, dataTestId }) => {
  return (
    <ButtonMenuProvider>
      <aside className="connect__aside" data-testid={dataTestId}>
        {children}
      </aside>
    </ButtonMenuProvider>
  );
};
