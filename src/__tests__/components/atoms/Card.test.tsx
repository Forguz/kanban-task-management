import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '@/components/atoms/Card';

describe('Card', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <Card cardTitle="card" subtasks="0 out of 3 subtasks" />
    );

    const card = getByTestId('card-container');

    expect(card).toBeInTheDocument();
  });
});
