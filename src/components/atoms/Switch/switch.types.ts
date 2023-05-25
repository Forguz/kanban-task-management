import { ChangeEvent } from 'react';

export interface SwitchProps {
  isOn: boolean;
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void;
}
