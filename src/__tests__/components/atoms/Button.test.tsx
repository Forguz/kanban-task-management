import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fireEvent } from '@storybook/testing-library';
import { GoPlus } from 'react-icons/go';
import { Button } from '@/components/atoms/Button';

describe('Button', () => {
  it('should render', () => {
    const { getByRole } = render(
      <Button label="button" onClick={() => ({})} />
    );

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should render IconButton', () => {
    const { getByRole } = render(<Button Icon={GoPlus} onClick={() => ({})} />);

    const button = getByRole('button');

    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should render lightButton', () => {
    const { getByRole } = render(<Button light onClick={() => ({})} />);
    const button = getByRole('button');

    expect(button.classList[1]).toEqual('lightButton');
  });

  it('should trigger function on click event', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button label="button" onClick={handleClick} />
    );

    const button = getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
