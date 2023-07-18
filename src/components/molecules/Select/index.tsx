'use client';

import React, { useState, useRef, useCallback } from 'react';
import type { Atom } from '@/types/components';
import type { SelectProps } from './select.types';

import { SelectButton } from '@/components/atoms/SelectButton';
import { SelectMenu } from '@/components/atoms/SelectMenu';

import styles from './select.module.css';

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

  const handleSelectOutsideClick = useCallback(
    (
      event: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>,
      clickedOut: boolean
    ) => {
      if (clickedOut && event.target !== buttonRef.current) {
        setDisplayDropdown(false);
      }
    },
    [setDisplayDropdown, buttonRef]
  );

  return (
    <div data-testid="select-container" className={styles.container}>
      <SelectButton
        innerRef={buttonRef}
        onClick={handleButtonClick}
        selectedOption={selectedOption}
      />
      <SelectMenu
        innerRef={dropdownRef}
        options={options}
        displayDropdown={displayDropdown}
        onSelectOption={onSelect}
        handleClickOut={handleSelectOutsideClick}
      />
    </div>
  );
}
