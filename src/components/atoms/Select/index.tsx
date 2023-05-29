import React, { useState, useRef, useCallback } from 'react';
import type { Atom } from '@/types/components';
import type { SelectProps } from './select.types';

import styles from './select.module.css';
import { useOutsideClickEvent } from '@/hooks/useOutsideClickEvent';

export function Select({
  options,
  selectedOption,
  onSelect,
}: SelectProps): Atom {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setDisplayDropdown((previousValue) => !previousValue);
    },
    [setDisplayDropdown]
  );

  const handleOutsideClick = useCallback(
    (
      event: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>,
      clickedOut: boolean
    ) => {
      if (clickedOut && event.target !== buttonRef.current) {
        setDisplayDropdown(false);
      }
    },
    [setDisplayDropdown]
  );

  useOutsideClickEvent(dropdownRef, handleOutsideClick);

  const dropdownStyle = displayDropdown
    ? `${styles.dropdownContainer} ${styles.showDropdown}`
    : styles.dropdownContainer;

  return (
    <div data-testid="select-container" className={styles.container}>
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className={styles.button}
      >
        {selectedOption}
      </button>
      <div
        ref={dropdownRef}
        className={dropdownStyle}
        data-testid="dropdown-container"
      >
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li
              className={styles.option}
              onClick={() => onSelect(option)}
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
