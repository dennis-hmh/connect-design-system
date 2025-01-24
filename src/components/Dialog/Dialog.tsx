import React, { forwardRef } from 'react';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { Icon } from '../Icon/Icon';
import { IconId } from '../../utils/icon-list';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { GradeBand } from 'src/enum/gradeband';
import { Typography } from '../Typography/Typography';

export type DialogProps = {
  children: React.ReactNode;
  id?: string;
  heading: string;
  elevation?: -2 | 0 | 2 | 4 | 6;
  roundedCorner?: boolean;
  fullWidth?: boolean;
  iconId?: IconId;
  expand?: boolean;
  collapse?: boolean;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  (
    {
      children,
      id,
      heading,
      elevation = 4,
      roundedCorner = true,
      fullWidth,
      iconId,
      expand,
      collapse,
      className,
      dataTestId,
    },
    ref,
  ) => {
    const dialogClassName = [
      'connect__dialog',
      elevation !== undefined ? `connect__elevation-${elevation}` : '',
      roundedCorner ? 'connect__rounded-corners' : '',
      fullWidth ? 'connect__full-width' : '',
      className ? className : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <dialog ref={ref} id={id} className={dialogClassName} data-testid={dataTestId}>
        <Paper backgroundColor="--connect__brand-pale-magenta">
          <Stack
            element="header"
            xs={{ direction: 'row', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Stack
              xs={{
                direction: 'row',
                spacing: 'sm',
                paddingX: 'sm',
                paddingY: 'xs',
                alignItems: 'center',
              }}
            >
              {iconId && <Icon id="add" size="xs"></Icon>}
              <Typography element="h6" size="body-sm" weight={600}>
                {heading}
              </Typography>
            </Stack>
            <Stack
              xs={{
                direction: 'row',
                spacing: 'xs',
                paddingX: 'sm',
                paddingY: 'xs',
                alignItems: 'center',
              }}
            >
              {expand && <ButtonMenu iconId="expand" iconSize="sm"></ButtonMenu>}
              {collapse && <ButtonMenu iconId="collapse" iconSize="sm"></ButtonMenu>}
              <ButtonMenu
                iconId="close"
                iconSize="sm"
                onClick={() => (ref as React.RefObject<HTMLDialogElement>).current?.close()}
              ></ButtonMenu>
            </Stack>
          </Stack>
        </Paper>
        <Stack element="main" xs={{ paddingX: 'sm', paddingY: 'xs' }}>
          {children}
        </Stack>
      </dialog>
    );
  },
);

Dialog.displayName = 'Dialog';

export { Dialog };
