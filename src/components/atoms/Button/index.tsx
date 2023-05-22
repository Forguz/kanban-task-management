import { Atom } from '@/types/components';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

export function Button({ onClick }: Props): Atom {
  return <button onClick={onClick}></button>;
}
