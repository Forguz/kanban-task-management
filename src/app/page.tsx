'use client';

import styles from './page.module.css';
import { Header } from '@/components/organisms/Header';
import { Select } from '@/components/molecules/Select';
import { EmptyBoard } from '@/components/organisms/EmptyBoard';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <EmptyBoard />
        <Select
          options={['1', '2', '3']}
          selectedOption="1"
          onSelect={() => console.log('DASdsa')}
        />
      </main>
    </>
  );
}
