import { Atom } from '@/types/components';
import { SelectMenuProps } from './select.types';
import styles from './select.module.css';
import { useOutsideClickEvent } from '@/hooks/useOutsideClickEvent';

export function SelectMenu({
  innerRef,
  onSelectOption,
  displayDropdown,
  options,
  handleClickOut,
}: SelectMenuProps): Atom {
  const dropdownStyle = displayDropdown
    ? `${styles.dropdownContainer} ${styles.showDropdown}`
    : styles.dropdownContainer;

  useOutsideClickEvent(innerRef, handleClickOut);

  return (
    <div
      ref={innerRef}
      className={dropdownStyle}
      data-testid="dropdown-container"
    >
      <ul className={styles.dropdownList}>
        {options.map((option) => (
          <li
            className={styles.option}
            onClick={() => onSelectOption(option)}
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
