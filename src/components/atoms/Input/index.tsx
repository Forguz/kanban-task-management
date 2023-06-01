import styles from './input.module.css';
import type { Atom } from '@/types/components';
import type { InputProps } from './input.types';

export function Input({ placeholder, ref, name, label }: InputProps): Atom {
  return (
    <div className={styles.inputContainer}>
      {!!label && (
        <label
          data-testid={`label-${name}`}
          className={styles.label}
          htmlFor={name}
          aria-labelledby={name}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={name}
        name={name}
        aria-label={`input-${name}`}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}
