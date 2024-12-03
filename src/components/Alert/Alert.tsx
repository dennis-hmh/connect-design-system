import React from 'react';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { Divider } from '../Divider/Divider';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
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
          alignItems: 'stretch',
          justifyContent: 'start',
          paddingX: 'md',
          paddingY: 'sm',
        }}
      >
        <Stack
          xs={{
            direction: 'row',
            flexWrap: 'nowrap',
            spacing: 'md',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: 'unset',
            paddingY: 'unset',
          }}
        >
          {iconId && (
            <>
              <Icon id={iconId} size={iconSize} fill={fill} />
              <Divider orientation="vertical" />
            </>
          )}
        </Stack>
        <Stack
          xs={{
            direction: 'column',
            spacing: 'xs',
            alignItems: 'start',
            justifyContent: 'center',
            paddingX: 'unset',
            paddingY: 'unset',
          }}
        >
          {children}
        </Stack>

        <ButtonMenu
          iconId="close"
          iconSize="md"
          ariaLabel="Close"
          onClick={handleClick}
          backgroundColor="gray-c5"
        />
      </Stack>
    </Paper>
  );
};
