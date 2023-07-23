import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/aportarPreguntas.module.css';
import Link from 'next/link';

//Falta hacerlo llamando a la base de datos y no con un arreglo
const preguntas = [
  { id: 1, nivel: 'Fácil', pregunta: '¿Cuál es la función para imprimir en la consola en Python?' },
  { id: 2, nivel: 'Fácil', pregunta: '¿Cómo se define una lista vacía en Python?' },
  { id: 3, nivel: 'Intermedio', pregunta: '¿Cómo se realiza una iteración sobre un diccionario en Python?' },
  { id: 4, nivel: 'Intermedio', pregunta: '¿Cuál es el método para unir dos listas en Python?' },
  { id: 5, nivel: 'Avanzado', pregunta: '¿Cuál es la diferencia entre "deep copy" y "shallow copy" en Python?' },
  { id: 6, nivel: 'Avanzado', pregunta: '¿Cómo se manejan las excepciones en Python?' },
];

const aportarPreguntas = () => {
  const [preguntasFiltradas, setPreguntasFiltradas] = useState(preguntas);
  const [filtroNivel, setFiltroNivel] = useState('Todos');

  const filtrarPreguntasPorNivel = (nivel) => {
    if (nivel === 'Todos') {
      setPreguntasFiltradas(preguntas);
    } else {
      const preguntasFiltradasPorNivel = preguntas.filter((pregunta) => pregunta.nivel === nivel);
      setPreguntasFiltradas(preguntasFiltradasPorNivel);
    }
    setFiltroNivel(nivel);
  };

  useEffect(() => {
    filtrarPreguntasPorNivel('Todos');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dificultad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      <Link href="/agregarPreguntas">
          
          <button className={styles.filterBtn}>Agregar Pregunta</button>
        
      </Link>
        <h1 className={styles.title}>Preguntas por Dificultad</h1>
        <div className={styles.addButton}>
       
      </div>

        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${filtroNivel === 'Todos' ? styles.active : ''}`}
            onClick={() => filtrarPreguntasPorNivel('Todos')}
          >
            Todos
          </button>
          <button
            className={`${styles.filterBtn} ${filtroNivel === 'Fácil' ? styles.active : ''}`}
            onClick={() => filtrarPreguntasPorNivel('Fácil')}
          >
            Fácil
          </button>
          <button
            className={`${styles.filterBtn} ${filtroNivel === 'Intermedio' ? styles.active : ''}`}
            onClick={() => filtrarPreguntasPorNivel('Intermedio')}
          >
            Intermedio
          </button>
          <button
            className={`${styles.filterBtn} ${filtroNivel === 'Avanzado' ? styles.active : ''}`}
            onClick={() => filtrarPreguntasPorNivel('Avanzado')}
          >
            Avanzado
          </button>
        </div>

        <ul className={styles.preguntaList}>
          {preguntasFiltradas.map((pregunta) => (
            <li key={pregunta.id} className={styles.preguntaItem}>
              <span className={styles.nivel}>{pregunta.nivel}</span>
              <p>{pregunta.pregunta}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a>Tingeso Pep 3 By Daigo</a>
      </footer>
    </div>
  );
};

export default aportarPreguntas;
