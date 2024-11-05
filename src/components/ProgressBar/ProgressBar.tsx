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

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  barColor,
  backgroundColor,
  dataTestId,
}) => {
  const customStyles: React.CSSProperties & {
    '--theme__progress-bg'?: string;
    '--theme__progress-color'?: string;
  } = {
    '--theme__progress-bg': `var(--connect__${backgroundColor})`,
    '--theme__progress-color': `var(--connect__${barColor})`,
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
};
