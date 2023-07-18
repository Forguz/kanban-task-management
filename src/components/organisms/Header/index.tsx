'use client';

import React from 'react';
import Image from 'next/image';
import { GoPlus } from 'react-icons/go';

import styles from './header.module.css';
import { Organism } from '@/types/components';
import { Button } from '@/components/atoms/Button';
import { DropdownButton } from '@/components/atoms/DropdownButton';

export function Header(): Organism {
  return (
    <header className={styles.header}>
      <Image
        className={styles['image-spacing']}
        src="/assets/images/logo.svg"
        width={25}
        height={25}
        alt="logo"
      />

      <div className={styles['dropdown-box']}>
        <DropdownButton label="Platform Launcher" />
      </div>

      <Button
        className={styles['button-plus-spacing']}
        onClick={() => console.log('Hello')}
        Icon={GoPlus}
      />

      <Image src="assets/images/kebab.svg" width={4} height={16} alt="kebab" />
    </header>
  );
}
