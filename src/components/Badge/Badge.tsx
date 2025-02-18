import React from 'react';
import { Typography, TypographyProps } from '../Typography/Typography';
import { Position, getPositionClass } from '../../utils/position';
import { GradeBand } from '../../enum/gradeband';

export type BadgeProps = {
  children: React.ReactNode;
  badgeContent?: React.ReactNode | number;
  placement?: Position;
  variant?: 'dot' | 'standard' | 'invisible';
  max?: number;
  showZero?: boolean;
  className?: string;
  dataTestId?: string;
  'aria-label'?: string;
  gradeBand?: GradeBand;
} & Pick<TypographyProps, 'color' | 'size'>;

export const Badge: React.FC<BadgeProps> = ({
  children,
  badgeContent,
  placement = 'top-right',
  variant = 'standard',
  color = 'primary-mid',
  size = 'caption',
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
        <Typography color="white" size={size} weight={600}>
          {content}
        </Typography>
      );
    }

    return content;
  };

  const badgeClassName = [
    'connect__badge',
    'connect__position',
    getPositionClass(placement),
    `connect__badge-${variant}`,
    `connect__badge-${size}`,
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
