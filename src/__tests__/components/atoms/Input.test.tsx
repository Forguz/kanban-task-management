import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Input } from '@/components/atoms/Input';

describe('Input', () => {
  it('should render', () => {
    const { getByRole } = render(<Input />);

    const input = getByRole('textbox');

    expect(input).toBeInTheDocument();
  });
});
