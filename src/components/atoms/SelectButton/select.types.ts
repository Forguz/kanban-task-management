import { RefObject } from 'react';

export interface SelectButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  selectedOption: string;
  innerRef: RefObject<HTMLButtonElement>;
}
