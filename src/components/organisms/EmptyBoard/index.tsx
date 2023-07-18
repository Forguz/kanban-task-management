'use client';

import { GoPlus } from 'react-icons/go';

import styles from './emptyBoard.module.css';
import { Button } from '@/components/atoms/Button';
import { Organism } from '@/types/components';

export function EmptyBoard(): Organism {
  return (
    <>
      <h2 className={styles.title}>
        This board is empty. Create a new column to get started.
      </h2>
      <Button
        Icon={GoPlus}
        onClick={() => console.log('add new column')}
        label="Add New Column"
      />
    </>
  );
}
