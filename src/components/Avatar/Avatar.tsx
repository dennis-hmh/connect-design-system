import React from 'react';
import { Typography, TypographyProps } from '../Typography/Typography';
import { Image } from '../Image/Image';
import { GradeBand } from '../../enum/gradeband';
import { Color } from '../../utils/colors';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Shape = 'circle' | 'square' | 'rounded';

export type AvatarProps = {
  children?: React.ReactNode;
  src?: string;
  alt: string;
  iconSize?: IconSize;
  backgroundColor?: Color;
  shape?: Shape;
  element?: React.ElementType;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
} & Pick<TypographyProps, 'color' | 'size' | 'weight'>;

export const Avatar: React.FC<AvatarProps> = ({
  children,
  src,
  alt,
  iconSize = 'sm',
  size = 'body-sm',
  backgroundColor = 'surface-mid',
  shape = 'circle',
  color = 'white',
  weight,
  element: Component = 'div',
  className,
  dataTestId,
}) => {
  const getAriaLabel = () => {
    if (src) return alt;
    if (typeof children === 'string') {
      return `Avatar with initials ${children}`;
    }
    return alt || 'Avatar';
  };

  // Dunno if this is the best way to do it, we also def don't need all these right now
  // But with ED we absolutely do
  const getShapeClass = () => {
    switch (shape) {
      case 'circle':
        return 'connect__avatar-circle';
      case 'square':
        return 'connect__avatar-square';
      case 'rounded':
        return 'connect__avatar-rounded';
      default:
        return 'connect__avatar-square';
    }
  };

  const getIconSize = () => {
    switch (iconSize) {
      case 'xs':
        return 'var(--connect__icon-xs)';
      case 'sm':
        return 'var(--connect__icon-sm)';
      case 'md':
        return 'var(--connect__icon-md)';
      case 'lg':
        return 'var(--connect__icon-lg)';
      case 'xl':
        return 'var(--connect__icon-xl)';
      case 'xxl':
        return 'var(--connect__icon-xxl)';
      case 'zero':
        return 'auto';
      default:
        return 'var(--connect__icon-md)';
    }
  };

  const renderContent = () => {
    if (src) {
      return (
        <Image
          imageSrc={src}
          altText={alt}
          roundedCorners={shape === 'circle'}
          className="connect__avatar-img"
          aria-hidden="false"
        />
      );
    }
    if (typeof children === 'string') {
      return (
        <Typography
          element="span"
          size={size}
          weight={weight}
          className="connect__avatar-text"
          color={color}
          aria-hidden="true"
        >
          {children}
        </Typography>
      );
    }
    return children;
  };

  const avatarStyle = {
    '--connect__avatar-bg': `var(--connect__${backgroundColor})`,
    width: getIconSize(),
    height: getIconSize(),
  } as React.CSSProperties;

  return (
    <Component
      className={`connect__avatar ${getShapeClass()} ${className || ''}`}
      style={avatarStyle}
      data-testid={dataTestId}
      role="img"
      aria-label={getAriaLabel()}
      tabIndex={0}
    >
      {renderContent()}
    </Component>
  );
};
