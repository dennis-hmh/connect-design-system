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
  size?: IconSize;
  backgroundColor?: Color;
  shape?: Shape;
  element?: React.ElementType;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
} & Pick<TypographyProps, 'color' | 'weight'>;

export const Avatar: React.FC<AvatarProps> = ({
  children,
  src,
  alt,
  size = 'sm',
  backgroundColor = 'surface-mid',
  shape = 'circle',
  color = 'white',
  weight,
  element: Component = 'div',
  className,
  dataTestId,
}) => {
  const getFontSize = () => {
    switch (size) {
      case 'xxl':
      case 'xl':
        return 'body-lg';
      case 'lg':
        return 'body-md';
      case 'md':
        return 'body-sm';
      case 'sm':
        return 'caption';
      case 'xs':
        return 'credits';
      default:
        return 'caption';
    }
  };

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

  const getAvatarClassName = () => {
    const classes = [
      'connect__avatar',
      getShapeClass(),
      !src && typeof children === 'string' ? `connect__avatar-text connect__icon-${size}` : '',
      className,
    ].filter(Boolean);

    return classes.join(' ');
  };

  const getAriaLabel = () => {
    if (src) return alt;
    if (typeof children === 'string') {
      return `Avatar with initials ${children}`;
    }
    return alt || 'Avatar';
  };

  const renderContent = () => {
    if (src) {
      return (
        <Image
          imageSrc={src}
          altText={alt}
          roundedCorners={shape === 'circle'}
          className={`connect__avatar-img connect__icon-${size}`}
          aria-hidden="false"
        />
      );
    }
    if (typeof children === 'string') {
      return (
        <Typography
          element="p"
          size={getFontSize()}
          weight={weight}
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
  } as React.CSSProperties;

  return (
    <Component
      className={getAvatarClassName()}
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
