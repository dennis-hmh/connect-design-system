import React from 'react';
import { Typography } from '../Typography/Typography';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { GradeBand } from '../../enum/gradeband';

export type ChipProps = {
  children: React.ReactNode;
  num: string | number;
  totalNum?: string | number;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function Chip({ children, num, totalNum, dataTestId }: ChipProps) {
  return (
    <Paper
      elevation={2}
      roundedCorner={true}
      backgroundColor="surface-white"
      className="connect__chip"
      dataTestId={dataTestId}
    >
      <Stack paddingX="md" paddingY="xs" direction="row" spacing="xs" alignItems="center">
        <Typography element="span" size="caption" color="surface-dark">
          {num}
          {totalNum && (
            <>
              <Typography element="span" size="caption" color="surface-dark">
                {' / '}
              </Typography>
              {totalNum}
            </>
          )}{' '}
          {children}
        </Typography>
      </Stack>
    </Paper>
  );
}
