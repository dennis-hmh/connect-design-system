import React from 'react';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type ProgressBarProps = {
  value: number;
  max?: number;
  backgroundColor?: Color;
  barColor?: Color;
  ariaLabel?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  barColor,
  backgroundColor,
  ariaLabel,
  dataTestId,
}) => {
  const customStyles: React.CSSProperties & {
    '--variant__progress-bg'?: string;
    '--variant__progress-color'?: string;
  } = {
    '--variant__progress-bg': `var(--connect__${backgroundColor})`,
    '--variant__progress-color': `var(--connect__${barColor})`,
  };

  return (
    <div className="connect__full-width">
      <progress
        className="connect__progress"
        role="progressbar"
        value={value}
        max={max}
        aria-label={ariaLabel}
        style={customStyles}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        data-testid={dataTestId}
      >
        {value + '%'}
      </progress>
    </div>
  );
};
