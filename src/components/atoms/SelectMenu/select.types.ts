import { RefObject } from 'react';

export interface SelectMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  onSelectOption: (option: string) => void;
  displayDropdown: boolean;
  options: string[];
  innerRef: RefObject<HTMLDivElement>;
  handleClickOut: (
    event: MouseEvent | React.MouseEvent<HTMLElement, MouseEvent>,
    clickedOut: boolean
  ) => void;
}
