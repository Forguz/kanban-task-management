import styles from './button.module.css';
import type { Atom } from '@/types/components';
import type { ButtonProps } from './button.types';

export function Button({
  onClick,
  light = false,
  label,
  Icon,
  disabled,
  ariaLabel = 'Button',
  name = 'Button',
  className,
}: ButtonProps): Atom {
  let finalStyles = styles.button;

  if (Icon && !label) {
    finalStyles += ` ${styles.iconButton}`;
  }

  if (light) {
    finalStyles += ` ${styles.lightButton}`;
  }

  if (className) {
    finalStyles += ` ${className}`;
  }

  return (
    <button
      name={name}
      aria-label={ariaLabel}
      disabled={disabled}
      className={finalStyles}
      onClick={onClick}
    >
      {!!Icon && <Icon className={styles.svg} />}
      {label}
    </button>
  );
}
