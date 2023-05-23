import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { Atom } from '@/types/components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  label: string;
}

export function Button({ onClick, label, disabled }: Props): Atom {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}
