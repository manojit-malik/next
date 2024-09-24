import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/styles.module.css';

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div className={styles.container}>

      <h1>User Profile: {username}</h1>

    <div className={styles.buttonLinkText}>
      <Link href="/" className={styles.buttonLinkText}> Back to Home </Link>
    </div>
      
    </div>
  );
}
