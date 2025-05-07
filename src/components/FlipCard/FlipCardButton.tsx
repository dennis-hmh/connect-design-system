import { type MouseEvent, useCallback } from 'react';
import { IconButton, IconButtonProps } from '../IconButton/IconButton';
import { Icon } from '../Icon/Icon';
import { type ButtonBaseProps } from '../ButtonBase/ButtonBase';

import styles from './FlipCard.module.css';
import { useFlipCardContext } from './FlipCardContext';

export type FlipcardButtonProps = Partial<IconButtonProps> & {
  onClick?: ButtonBaseProps['onClick'];
};

export function FlipCardButton({ onClick, ...rest }: FlipcardButtonProps) {
  const { toggle } = useFlipCardContext();

  const handleToggleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      toggle();
      onClick?.(e);
    },
    [onClick, toggle],
  );

  return (
    <IconButton
      classes={styles['connect__flipcard-button']}
      variant="outlined"
      rounded={true}
      color="primary"
      size="sm"
      onClick={handleToggleOnClick}
      ariaLabel="Flip card"
      {...rest}
    >
      <Icon id="renew" size="md" />
    </IconButton>
  );
}
