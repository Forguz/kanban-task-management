import styles from './input.module.css';
import type { Atom } from '@/types/components';
import type { InputProps } from './input.types';

export function Input({ placeholder, ref }: InputProps): Atom {
  return <input ref={ref} placeholder={placeholder} className={styles.input} />;
}
