import React from 'react';
import { Color } from 'src/utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type PillProps = {
  children: React.ReactNode;
  backgroundColor: Color;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function Pill({ children, backgroundColor, dataTestId }: PillProps) {
  const pillStyle: React.CSSProperties & {
    '--variant__pill-bg'?: string;
  } = backgroundColor ? { '--variant__pill-bg': `var(--connect__${backgroundColor})` } : {};

  return (
    <div className={`connect__pill`} style={pillStyle} data-testid={dataTestId}>
      {children}
    </div>
  );
}
