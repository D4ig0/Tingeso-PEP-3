import React, { useState } from 'react';
import styles from '../styles/menuDeslizante.module.css'
import Link from 'next/link';


const Menudeslizante = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        {isMenuOpen ? <img src="images/CERRAR.png" alt="Logo" className={styles.imagen} /> : <img src="images/MENU.png" alt="Logo" className={styles.imagen} />} 
      </button>
      {isMenuOpen && (
        <ul className={styles.menu}>
          <Link href="/"><li>Inicio</li></Link>
          <Link href="/dificultad"><li>Entrenar</li></Link>
          <Link href="/biblioteca"><li>Biblioteca</li></Link>
          <Link href="/agregarPreguntas"><li>Agregar Preguntas</li></Link>
        </ul>
      )}
    </div>
  );
};

export default Menudeslizante;
