import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@/components/atoms/Button';

describe('Button', () => {
  it('should render', () => {
    const { getByRole } = render(<Button />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
