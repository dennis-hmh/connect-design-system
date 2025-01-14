import React from 'react';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
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
  iconSize = 'sm',
  fill,
  handleClick,
  testId,
}) => {
  return (
    <Paper elevation={4} roundedCorner={true} className="connect__alert" data-testid={testId}>
      <Stack
        xs={{
          direction: 'row',
          spacing: 'sm',
          flexWrap: 'nowrap',
          alignItems: 'center',
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
            alignSelf: 'start',
            justifyContent: 'space-between',
            paddingX: 'zero',
            paddingY: 'zero',
          }}
        >
          {iconId && (
            <>
              <Icon id={iconId} size={iconSize} fill={fill} />
            </>
          )}
        </Stack>
        <Stack
          flex="auto"
          xs={{
            direction: 'column',
            spacing: 'xs',
            alignItems: 'start',
            justifyContent: 'center',
            paddingX: 'zero',
            paddingY: 'zero',
          }}
        >
          {children}
        </Stack>

        {handleClick && (
          <Stack
            xs={{
              direction: 'row',
              flexWrap: 'nowrap',
              spacing: 'md',
              alignItems: 'center',
              alignSelf: 'start',
              justifyContent: 'space-between',
              paddingX: 'zero',
              paddingY: 'zero',
            }}
          >
            <ButtonMenu iconId="close" iconSize="sm" ariaLabel="Close" onClick={handleClick} />
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};
