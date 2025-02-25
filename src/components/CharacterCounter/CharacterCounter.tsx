import React from 'react';
import { Stack } from '../Stack/Stack';
import { Typography } from '../Typography/Typography';
import { GradeBand } from '../../enum/gradeband';

export interface CharacterCounterProps {
  charCount: number;
  characterLimit?: number;
  gradeBand?: GradeBand;
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  charCount,
  characterLimit,
}) => {
  if (typeof charCount !== 'number') return null;

  const isLimitReached = characterLimit && charCount >= characterLimit;

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

      {characterLimit && (
        <>
          <Typography element="span" size="caption" color="surface-mid" aria-hidden="true">
            /
          </Typography>
          <Typography element="span" size="caption" color="surface-mid">
            {characterLimit}
          </Typography>
        </>
      )}
    </Stack>
  );
};
