import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BoardOption } from '@/components/atoms/BoardOption';

describe('BoardOption', () => {
  it('should render', () => {
    const { getByRole } = render(<BoardOption boardName="a" groupName="a" />);

    const boardOption = getByRole('listitem');

    expect(boardOption).toBeInTheDocument();
  });

  it('should check input when click in the label', () => {
    const { getByTestId, getByRole } = render(
      <BoardOption boardName="board" groupName="group" />
    );

    const label = getByTestId('BoardLabel');
    const inputRadio = getByRole('radio');

    expect(inputRadio).not.toBeChecked();
    fireEvent.click(label);

    expect(inputRadio).toBeChecked();
  });

  it('should apply checked style if boardOption is checked', () => {
    const { getByTestId } = render(
      <BoardOption boardName="board" groupName="group" isChecked />
    );

    const label = getByTestId('BoardLabel');
    expect(label).toHaveClass('containerChecked');
  });
});
