import styles from './FlipCard.module.css';
import { FlipCardContextContextType, useFlipCardContext } from './FlipCardContext';

const interactiveElementsSelector =
  'a, button, input, dialog, textarea, select, label, summary, [contenteditable="true"]';

const makeHandleStopPropagation =
  (ref: FlipCardContextContextType['ref']) => (e: React.SyntheticEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const match = target.closest(interactiveElementsSelector);
    const container = ref.current;

    if (!match) return;
    if (match === container) return;
    if (!container?.contains(match)) return;

    e.stopPropagation();
  };

export function FlipCardBackDrop({ children }) {
  const { ref } = useFlipCardContext();
  const handleStopPropagation = makeHandleStopPropagation(ref);

  return (
    <div
      className={styles['connect__flipcard-back-drop']}
      onClick={handleStopPropagation}
      onTouchStart={handleStopPropagation}
    >
      {children}
    </div>
  );
}
