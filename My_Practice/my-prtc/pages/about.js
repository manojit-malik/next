import Link from 'next/link';
import styles from '../styles/styles.module.css';

export default function About() {
  return (
    <div className={styles.container}>

      <h1>About Page</h1>
     
        <p id={styles.inp}>This is About page </p>

        <div id={styles.inp}>
            <Link href="/" className={styles.buttonLinkText}>
                Back to Home
            </Link>
        </div>
      

    </div>
  );
}