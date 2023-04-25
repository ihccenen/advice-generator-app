import getAdvice from '@/lib/getAdvice';
import styles from './page.module.css';
import Advice from './components/Advice';

export default async function Home() {
  const initialAdvice = await getAdvice();

  return (
    <main className={styles.main}>
      <Advice initial={initialAdvice.slip} />
    </main>
  );
}
