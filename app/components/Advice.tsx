'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Advice.module.css';
import getAdvice from '@/lib/getAdvice';

export default function Advice({
  initial,
}: {
  initial: { id: number; advice: string };
}) {
  const [advice, setAdvice] = useState(initial);

  const handleClick = async () => {
    const newAdvice = await getAdvice();

    setAdvice(newAdvice.slip);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.adviceNumber}>{`Advice #${advice.id}`}</p>
      <q className={styles.advice} cite="https://api.adviceslip.com">
        {advice.advice}
      </q>
      <picture className={styles.picture}>
        <source
          media="(min-width: 750px)"
          srcSet="/pattern-divider-desktop.svg"
          width={444}
          height={16}
        />
        <Image
          src="/pattern-divider-mobile.svg"
          width={295}
          height={16}
          quality={100}
          alt=""
        />
      </picture>
      <button
        className={styles.button}
        type="button"
        aria-label="new advice"
        onClick={handleClick}
      >
        <Image
          src="/icon-dice.svg"
          width={24}
          height={24}
          quality={100}
          alt=""
        />
      </button>
    </div>
  );
}
