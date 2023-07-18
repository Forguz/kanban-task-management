import type { Atom } from '@/types/components';
import type { SelectButtonProps } from './select.types';
import styles from './selectButton.module.css';

export function SelectButton({
  innerRef,
  selectedOption,
  onClick,
}: SelectButtonProps): Atom {
  function handleButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    onClick(event);
  }

  return (
    <button
      ref={innerRef}
      onClick={handleButtonClick}
      className={styles.button}
    >
      {selectedOption}
    </button>
  );
}
