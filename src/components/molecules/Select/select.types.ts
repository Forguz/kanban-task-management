export interface SelectProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}
