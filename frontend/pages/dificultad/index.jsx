import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/dificultad.module.css';
import { useState, useEffect } from 'react';
import PreguntaService from '/services/PreguntaService';

const Dificultad = () => {
  const [dificultad, setDificultad] = useState(null);
  const [preguntasEjemplo, setPreguntasEjemplo] = useState([]);

  const handleSeleccionarDificultad = (dificultad) => {
    setDificultad(dificultad);
    localStorage.setItem('dificultad', dificultad);
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Dificultad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.breadcrumb}>
          <Link href="/">INICIO</Link> &gt; DIFICULTAD
        </nav>

        <h1 className={styles.title}>Selecciona la dificultad de la prueba</h1>

      

        <div className={styles.filters}>
          <div className={styles.filterCard} onClick={() => handleSeleccionarDificultad('basica')}>
            <Link href="/prueba">
              <div className={styles.titleContainer}>
                <h2>Fácil</h2>
              </div>
              <div className={styles.content}>
                <p>Domina los conceptos básicos y construye una base sólida en Python.</p>
              </div>
            </Link>
          </div>

          <div className={styles.filterCard} onClick={() => handleSeleccionarDificultad('intermedia')}>
            <Link href="/prueba">
              <div className={styles.titleContainer}>
                <h2>Intermedio</h2>
              </div>
              <div className={styles.content}>
                <p>Explora nuevas funcionalidades y lleva tus habilidades de Python al siguiente nivel.</p>
              </div>
            </Link>
          </div>

          <div className={styles.filterCard} onClick={() => handleSeleccionarDificultad('avanzada')}>
            <Link href="/prueba">
              <div className={styles.titleContainer}>
                <h2>Avanzado</h2>
              </div>
              <div className={styles.content}>
                <p>Supera obstáculos complejos y alcanza la maestría en Python.</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dificultad;
