import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  light?: boolean;
  label?: string;
  Icon?: IconType;
  ariaLabel?: string;
}
