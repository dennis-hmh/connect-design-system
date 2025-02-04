import React from 'react';
import { Color } from '../../utils/colors';
import { Typography } from '../Typography/Typography';
import { GradeBand } from '../../enum/gradeband';

type BadgeAnchorOrigin = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
};

export interface BadgeProps {
  children: React.ReactNode;
  badgeContent?: React.ReactNode;
  anchorOrigin?: BadgeAnchorOrigin;
  variant?: 'dot' | 'standard' | 'invisible';
  color?: Color;
  max?: number;
  showZero?: boolean;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
  'aria-label'?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  badgeContent,
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  variant = 'dot',
  color = 'primary-mid',
  max,
  showZero = false,
  className = '',
  dataTestId,
  'aria-label': ariaLabel,
}) => {
  const displayContent = () => {
    if (variant === 'dot') return null;
    if (variant === 'invisible') return null;
    if (!showZero && badgeContent === 0) return null;

    const content =
      max != null && typeof badgeContent === 'number' && badgeContent > max
        ? `${max}+`
        : badgeContent;

    if (typeof content === 'string' || typeof content === 'number') {
      return (
        <Typography color="white" size="caption" weight={600}>
          {content}
        </Typography>
      );
    }

    return content;
  };

  const badgeClassName = [
    'connect__badge',
    `connect__badge-${variant}`,
    `connect__badge-${anchorOrigin.vertical}-${anchorOrigin.horizontal}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const badgeStyle = {
    '--connect__badge-bg': `var(--connect__${color})`,
  } as React.CSSProperties;

  return (
    <div className="connect__badge-container" data-testid={dataTestId}>
      {children}
      <span className={badgeClassName} style={badgeStyle} aria-label={ariaLabel}>
        {displayContent()}
      </span>
    </div>
  );
};
