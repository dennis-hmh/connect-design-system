import { type PropsWithChildren } from 'react';
import { Paper, PaperProps } from '../Paper/Paper';
import styles from './Flipcard.module.css';
import { useFlipCardContext } from './FlipCardContext';
import { FlipCardBackDrop } from './FlipCardBackdrop';

type BaseFlipCardFaceProps = PaperProps & {
  face: 'front' | 'back';
};

export type FlipCardFaceProps = PropsWithChildren<BaseFlipCardFaceProps>;

export function FlipCardFace({ face, children, ...paperProps }: FlipCardFaceProps) {
  const { flip } = useFlipCardContext();
  const inert = face === 'front' ? flip : !flip;

  return (
    <Paper
      className={styles[`connect__flipcard-${face}`]}
      fullWidth
      element="div"
      elevation={4}
      roundedCorner={true}
      inert={inert}
      {...paperProps}
    >
      <FlipCardBackDrop>{children}</FlipCardBackDrop>
    </Paper>
  );
}
