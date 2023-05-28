import { useState } from 'react';
import type { Atom } from '@/types/components';
import type { SelectedProps } from './select.types';

export function Select({ options }: SelectedProps): Atom {
  const [selectedOption, selectOption] = useState(options[0]);

  return (
    <div data-testid="select-container">
      <button>{selectedOption}</button>
      <div data-testid="dropdown-container">
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </div>
    </div>
  );
}
