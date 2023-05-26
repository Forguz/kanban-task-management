import { InputHTMLAttributes, RefObject } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
  label?: string;
  name: string;
}
