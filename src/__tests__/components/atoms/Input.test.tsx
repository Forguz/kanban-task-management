import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Input } from '@/components/atoms/Input';

describe('Input', () => {
  it('should render', () => {
    const { getByRole } = render(<Input name="input" />);

    const input = getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('should render with a label', () => {
    const name = 'input';
    const labelText = 'input2';
    const { getByTestId } = render(<Input name={name} label={labelText} />);

    const label = getByTestId(`label-${name}`);

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(labelText);
  });
});
