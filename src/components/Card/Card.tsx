import React from 'react';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { GradeBand } from 'src/enum/gradeband';

export type CardProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Card: React.FC<CardProps> = ({ children, header, footer, dataTestId }) => {
  return (
    <Paper dataTestId={dataTestId} elevation={2} roundedCorner={true}>
      {header && (
        <Stack
          element="header"
          xs={{
            direction: 'column',
            spacing: 'sm',
            paddingX: 'zero',
            paddingY: 'zero',
          }}
        >
          {header}
        </Stack>
      )}
      <Stack
        xs={{
          direction: 'column',
          spacing: 'sm',
          paddingX: 'sm',
          paddingY: 'sm',
        }}
      >
        {children}
      </Stack>
      {footer && (
        <Stack
          element="footer"
          xs={{
            alignItems: 'stretch',
            direction: 'column',
            spacing: 'sm',
            paddingX: 'sm',
            paddingY: 'sm',
          }}
          md={{
            direction: 'row',
            justifyContent: 'space-between',
          }}
        >
          {footer}
        </Stack>
      )}
    </Paper>
  );
};
