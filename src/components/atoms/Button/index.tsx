import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import styles from './button.module.css';
import { Atom } from '@/types/components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  light?: boolean;
  label?: string;
  Icon?: IconType;
  ariaLabel?: string;
}

export function Button({
  onClick,
  light = false,
  label,
  Icon,
  disabled,
  ariaLabel = 'Button',
  name = 'Button',
}: Props): Atom {
  let finalStyles = styles.button;

  if (Icon && !label) {
    finalStyles += ` ${styles.iconButton}`;
  }

  if (light) {
    finalStyles += ` ${styles.lightButton}`;
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
