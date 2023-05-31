import { Atom } from '@/types/components';
import { CardProps } from './card.types';
import styles from './card.module.css';

// will be draggable in the future
export function Card({ cardTitle, subtasks }: CardProps): Atom {
  return (
    <div className={styles.container} data-testid="card-container">
      <h3 className={styles.heading}>{cardTitle}</h3>
      <p className={styles.paragraph}>{subtasks}</p>
    </div>
  );
}
