import React from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { Paper } from '../Paper/Paper';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';

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
      backgroundColor="surface-white"
      className="connect__chip"
      elevation={2}
      roundedCorner={true}
      element="div"
      data-testid={dataTestId}
    >
      <Stack direction="row" spacing="xs" paddingX="md" paddingY="xs">
        <Typography size="body-md" color="surface-black">
          {num} {totalNum ? `/ ${totalNum}` : ''}
        </Typography>
        <Typography size="body-md" color="surface-black">
          {children}
        </Typography>
      </Stack>
    </Paper>
  );
}
