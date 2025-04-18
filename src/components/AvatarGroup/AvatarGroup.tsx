// needs a code review
// loosely copy from here https://github.com/mui/material-ui/blob/master/packages/mui-material/src/AvatarGroup/AvatarGroup.js
import React from 'react';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { Typography } from '../Typography/Typography';
import { Stack, StackBreakpointValues } from '../Stack/Stack';
import { GradeBand } from '../../enum/gradeband';

type SpacingSizes = NonNullable<StackBreakpointValues['spacing']>;

export interface AvatarGroupProps {
  children: React.ReactElement<AvatarProps>[]; // added this this morning, i think it's the only way to access the props
  max?: number;
  total?: number;
  renderSurplus?: (surplus: number) => React.ReactNode;
  spacing?: SpacingSizes;
  variant?: 'standard' | 'grouped';
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
}

export const AvatarGroup = ({
  children,
  max = 5,
  renderSurplus,
  total,
  spacing = 'sm',
  variant = 'standard',
  className = '',
  dataTestId,
}: AvatarGroupProps): JSX.Element => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<AvatarProps>[];
  const totalAvatars = total ?? childrenArray.length;
  const surplus = totalAvatars - max;

  const renderSurplusAvatar = () => {
    if (surplus <= 0) return null;
    if (renderSurplus) return renderSurplus(surplus);

    return (
      <Avatar alt={`+${surplus} users`} shape="circle">
        <Typography element="span" size="caption">
          +{surplus}
        </Typography>
      </Avatar>
    );
  };

  const classes = [variant === 'grouped' && `connect__stack-negative-${spacing}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Stack
      direction="row-reverse"
      alignItems="center"
      spacing={variant === 'standard' ? spacing : undefined}
      className={classes}
      data-testid={dataTestId}
    >
      {surplus > 0 && renderSurplusAvatar()}
      {childrenArray.slice(0, max).reverse()}
    </Stack>
  );
};
