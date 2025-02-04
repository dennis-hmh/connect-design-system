import React from 'react';
import { Color } from '../../utils/colors';
import { Typography } from '../Typography/Typography';
import { Image } from '../Image/Image';
import { GradeBand } from '../../enum/gradeband';

type Shape = 'circle' | 'square' | 'rounded';

export type AvatarProps = {
  children?: React.ReactNode;
  src?: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'unset';
  backgroundColor?: Color;
  shape?: Shape;
  color?: Color;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  element?: React.ElementType;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

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

  const getSize = () => {
    switch (size) {
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
      case 'unset':
        return 'auto';
      default:
        return 'var(--connect__icon-md)';
    }
  };

  const avatarClassName = ['connect__avatar', getShapeClass(), className || '']
    .filter(Boolean)
    .join(' ');

  const avatarStyle = {
    '--connect__avatar-bg': `var(--connect__${backgroundColor})`,
    width: getSize(),
    height: getSize(),
  } as React.CSSProperties;

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
          size={getDefaultTypographySize(size)}
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

  // Design is working through the type sizes, will prob be removed!!
  const getDefaultTypographySize = (avatarSize: string) => {
    switch (avatarSize) {
      case 'xs':
        return 'caption';
      case 'sm':
        return 'caption';
      case 'md':
        return 'body-sm';
      case 'lg':
        return 'body-md';
      case 'xl':
        return 'body-lg';
      case 'xxl':
        return 'heading-sm';
      default:
        return 'body-sm';
    }
  };

  return (
    <Component
      className={avatarClassName}
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
