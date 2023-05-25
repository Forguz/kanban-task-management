'use client';

import styles from './switch.module.css';
import type { Atom } from '@/types/components';
import type { SwitchProps } from './switch.types';

export function Switch({ isOn, handleToggle }: SwitchProps): Atom {
  return (
    <>
      <input
        id="react-switch"
        className={styles.switch}
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
      ></input>
      <label
        data-testid="switch-label"
        className={styles.switchLabel}
        htmlFor="react-switch"
      >
        <span className={styles.switchButton} />
      </label>
    </>
  );
}
