import React from 'react';
import { Paper } from '../Paper/Paper';
import { Stack, StackProps } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { Divider, DividerProps } from '../Divider/Divider';
import { GradeBand } from 'src/enum/gradeband';

export type AlertProps = {
  children: React.ReactNode;
  iconId?: IconId;
  iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fill?: Color;
  handleClick?: () => void;
  testId?: string;
  gradeBand?: GradeBand;
};

export const Alert: React.FC<AlertProps> = ({
  children,
  iconId,
  iconSize,
  fill,
  handleClick,
  testId,
}) => {
  return (
    <Paper elevation="3" roundedCorner={true} className="connect__alert" data-testid={testId}>
      <Stack
        xs={{
          direction: 'row',
          spacing: 'md',
          alignItems: 'center',
          justifyContent: 'start',
          paddingX: 'sm',
          paddingY: 'xs',
        }}
      >
        {iconId && (
          <>
            <Icon id={iconId} size={iconSize} fill={fill} />
            <Divider aria-orientation="vertical" />
          </>
        )}
        {children}
        <button onClick={handleClick}>
          <Icon id="close" size="md" fill="" />
        </button>
      </Stack>
    </Paper>
  );
};
