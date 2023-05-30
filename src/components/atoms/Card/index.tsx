import { Atom } from '@/types/components';
import { CardProps } from './card.types';

export function Card({ title, subtasks }: CardProps): Atom {
  return (
    <div data-testid="card-container">
      <h3>{title}</h3>
      <p>{subtasks}</p>
    </div>
  );
}
