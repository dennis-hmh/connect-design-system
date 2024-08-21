import React from 'react';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type ProgressBarProps = {
  value: number;
  max?: number;
  backgroundColor?: Color;
  barColor?: Color;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function ProgressBar({
  value,
  max = 100,
  barColor,
  backgroundColor,
  dataTestId,
}: ProgressBarProps) {
  const customStyles: React.CSSProperties & {
    '--progress-bg'?: string;
    '--progress-color'?: string;
  } = {
    '--progress-bg': `var(--connect__${backgroundColor})`,
    '--progress-color': `var(--connect__${barColor})`,
  };

  return (
    <div className="connect__progress-wrapper">
      <progress
        className="connect__progress"
        value={value}
        max={max}
        style={customStyles}
        data-testid={dataTestId}
      >
        {value + '%'}
      </progress>
    </div>
  );
}
