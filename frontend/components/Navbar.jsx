import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import Menu from './Menudeslizante'

const Navbar = () => {
  return (
    <nav className={styles.format}>
   
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src="images/logoPython.png" alt="Logo" />
          <Link href="/">Python Dojo</Link>
        </div>
      </div>
      <div className={styles.center}>

      
      </div>
      <div className={styles.right}>
      <Menu />
      </div>
    </nav>
  );
};

export default Navbar;