import { findByTestId, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Select } from '@/components/atoms/Select';
const options = ['a', 'b', 'c', 'd', 'e', 'f'];

describe('Select', () => {
  it('should render with dropdown', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <Select options={options} selectedOption="a" onSelect={onSelect} />
    );

    const selectContainer = getByTestId('select-container');

    expect(selectContainer).toBeInTheDocument();

    const dropdownContainer = getByTestId('dropdown-container');

    expect(dropdownContainer).toBeInTheDocument();
  });

  it('should display dropdown when button is clicked', () => {
    const onSelect = jest.fn();
    const { getByRole, getByTestId } = render(
      <Select options={options} selectedOption="a" onSelect={onSelect} />
    );

    const button = getByRole('button');
    const dropdown = getByTestId('dropdown-container');

    expect(dropdown.classList).toHaveLength(1);
    expect(dropdown.className).toEqual('dropdownContainer');

    fireEvent.click(button);
    expect(dropdown.classList).toHaveLength(2);
    expect(dropdown.className).toEqual('dropdownContainer showDropdown');
  });

  // it('should hide dropdown when clicked outside dropdown', () => {
  //   const onSelect = jest.fn();
  //   const { getByRole, getByTestId } = render(
  //     <Select options={options} selectedOption="a" onSelect={onSelect} />
  //   );

  //   const button = getByRole('button');
  //   const dropdown = getByTestId('dropdown-container');

  //   fireEvent.click(button);
  //   expect(dropdown.classList).toHaveLength(2);
  //   expect(dropdown.className).toEqual('dropdownContainer showDropdown');

  //   fireEvent.click(getByTestId('select-container'));

  //   expect(dropdown.classList).toHaveLength(1);
  //   expect(dropdown.className).toEqual('dropdownMenu');
  // });
});
