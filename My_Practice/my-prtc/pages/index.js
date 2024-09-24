import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/styles.module.css';

export default function Home() {
  const [username, setUsername] = useState('');

  const router = useRouter();

  const navigateToProfile = () => {
    router.push(`/profile/${username}`);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (

    <div className={styles.container}>

      <h1>Welcome to the Home Page</h1>

      <br/><br/><br/>

      <input type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} id={styles.inp}/>

      <button className={styles.buttonLink} onClick={navigateToProfile}>View Profile</button>

      <br/><br/><br/>

      <Link href="/about" className={styles.buttonLinkText}> Go to About Page </Link>
    </div>
  );
}