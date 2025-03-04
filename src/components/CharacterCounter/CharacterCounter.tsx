import React from 'react';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';
import { GradeBand } from '../../enum/gradeband';

export interface CharacterCounterProps {
  charCount: number;
  charLimit: number;
  gradeBand?: GradeBand;
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({ charCount, charLimit }) => {
  const isLimitReached = charLimit && charCount >= charLimit;

  return (
    <Stack direction="row" alignItems="center" justifyContent="end" spacing="xs">
      <Typography
        element="span"
        size="caption"
        style={isLimitReached ? 'italic' : 'normal'}
        weight={isLimitReached ? 700 : 400}
        color="surface-mid"
      >
        {charCount}
      </Typography>
      <Typography element="span" size="caption" color="surface-mid" aria-hidden="true">
        /
      </Typography>
      <Typography element="span" size="caption" color="surface-mid">
        {charLimit}
      </Typography>
    </Stack>
  );
};
