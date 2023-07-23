import Link from 'next/link';
import styles from '../styles/navbar.module.css'




const navbar = () => {
    return (
        <nav className={styles.format}>

            <div className={styles.left} >
                <div className={styles.logo}>
                <img src="images/logoPython.png" alt="Logo" />
                    <Link href="/"> Python Dojo</Link>
                    </div>
                
            </div>
            <div className={styles.center}>

            </div>
            <div className={styles.right}>
                <Link href="/">Inicio</Link>
            </div>
        </nav>
    );
}

export default navbar;