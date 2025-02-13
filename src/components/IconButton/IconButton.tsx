import React from 'react';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from '../../enum/gradeband';

type IconButtonBaseProps = {
  iconId: IconId;
  size?: 'small' | 'medium' | 'large';
  color?: Color;
  disabled?: boolean;
  disableElevation?: boolean;
  edge?: 'start' | 'end' | false;
  className?: string;
  dataTestId?: string;
  ariaLabel: string;
};

// Separate props for button and anchor
type ButtonProps = IconButtonBaseProps & {
  href?: never;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type AnchorProps = IconButtonBaseProps & {
  href: string;
  type?: never;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export type IconButtonProps = ButtonProps | AnchorProps;

const iconSizeMap = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
} as const;

export const IconButton: React.FC<IconButtonProps> = ({
  iconId,
  size = 'medium',
  color,
  disabled = false,
  disableElevation = false,
  edge = false,
  type = 'button',
  href,
  onClick,
  ariaLabel,
  className = '',
  dataTestId,
  ...other
}) => {
  const classNames = React.useMemo(
    () =>
      [
        'connect-icon-button',
        `connect-icon-button-${size}`,
        color && `connect-icon-button-${color}`,
        disabled && 'connect-icon-button-disabled',
        disableElevation && 'connect-icon-button-no-elevation',
        edge && `connect-icon-button-edge-${edge}`,
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [size, color, disabled, disableElevation, edge, className],
  );

  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        role="button"
        aria-disabled={disabled}
        aria-label={ariaLabel}
        data-testid={dataTestId}
        onClick={onClick as (event: React.MouseEvent<HTMLAnchorElement>) => void}
        {...other}
      >
        <Icon
          id={iconId}
          size={iconSizeMap[size]}
          className="connect-icon-button-icon"
          fill={color}
        />
      </a>
    );
  }

  return (
    <button
      className={classNames}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      onClick={onClick as (event: React.MouseEvent<HTMLButtonElement>) => void}
      {...other}
    >
      <Icon
        id={iconId}
        size={iconSizeMap[size]}
        className="connect-icon-button-icon"
        fill={color}
      />
    </button>
  );
};

IconButton.displayName = 'IconButton';

export default IconButton;
