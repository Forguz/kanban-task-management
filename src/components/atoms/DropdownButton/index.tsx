import { useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

import { Atom } from '@/types/components';
import { DropdownnProps } from './dropdownButton.types';
import styles from './DropdownButton.module.css';

export function DropdownButton({ label }: DropdownnProps): Atom {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <button onClick={handleClick} className={styles.container}>
      <h2>{label}</h2>
      {clicked ? <GoChevronUp /> : <GoChevronDown />}
    </button>
  );
}
