'use client';

import { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { TbLayoutBoardSplit } from 'react-icons/tb';

import type { Atom } from '@/types/components';
import type { BoardOptionProps } from './BoardOption.types';
import styles from './BoardOption.module.css';

export function BoardOption({
  groupName,
  boardName,
  isChecked,
}: BoardOptionProps): Atom {
  const inputRef = useRef<HTMLInputElement>(null);
  const [labelStyle, setLabelStyle] = useState<string>(styles.container);

  useLayoutEffect(() => {
    if (isChecked) {
      if (inputRef.current) {
        const inputElement = inputRef.current;
        inputElement.checked = true;
        setLabelStyle(`${styles.container} ${styles.containerChecked}`);
      }
    }
  }, [isChecked]);

  const onCheck = useCallback(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;
      if (inputElement.checked) {
        setLabelStyle(`${styles.container} ${styles.containerChecked}`);
      }
    }
  }, [setLabelStyle]);

  return (
    <li
      aria-label="BoardOptionLi"
      aria-labelledby={boardName}
      className={styles.listItem}
    >
      <input
        className={styles.input}
        type="radio"
        ref={inputRef}
        name={groupName}
        value={boardName}
        id={boardName}
        onChange={onCheck}
      />
      <label
        data-testid="BoardLabel"
        className={labelStyle}
        htmlFor={boardName}
      >
        <TbLayoutBoardSplit className={styles.svg} />
        BoardOption
      </label>
    </li>
  );
}
