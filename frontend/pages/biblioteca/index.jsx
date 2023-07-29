import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/biblioteca.module.css';
import Link from 'next/link';
import PreguntaService from '/services/PreguntaService';

const Biblioteca = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [preguntasFiltradas, setPreguntasFiltradas] = useState([]);
  const [filtroNivel, setFiltroNivel] = useState('Todos');

  const filtrarPreguntasPorNivel = (nivel) => {
    if (nivel === 'Todos') {
      setPreguntasFiltradas(preguntas);
    } else {
      const preguntasFiltradasPorNivel = preguntas.filter((pregunta) => pregunta.dificultad === nivel);
      setPreguntasFiltradas(preguntasFiltradasPorNivel);
    }
    setFiltroNivel(nivel);
  };
  useEffect(() => {
    PreguntaService.preguntasTotales()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPreguntas(response.data);
          setPreguntasFiltradas(response.data);
          localStorage.setItem("preguntasTotales", JSON.stringify(response.data));
        } else {
          console.error("Error: Los datos recibidos no son un array.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener preguntas del backend:", error);
      });
  }, []);




  return (
    <div className={styles.container}>
      <Head>
        <title>Biblioteca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.breadcrumb}>
        <Link href="/">INICIO</Link> &gt; BIBLIOTECA
      </nav>

      <Link href="/agregarPreguntas">
          <button className={styles.agregar}>Agregar Pregunta</button>
        </Link>
        <Link href="/">
          <button className={styles.inicio }>Volver a inicio</button>
        </Link>

      <main className={styles.main}>
        
        <h1 className={styles.title}>Biblioteca de preguntas</h1>
        <div className={styles.addButton}></div>
        <h4>
          Aquí encontrarás todas las preguntas disponibles para estudiar
        </h4>
        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${filtroNivel === 'Todos' ? styles.active : ''}`}
            onClick={() => filtrarPreguntasPorNivel('Todos')}
          >
            Todos
          </button>
          <button
            className={`${styles.filterBtn} ${filtroNivel === 'basica' ? styles.active : ''}`}
            onClick={() => filtrarPreguntasPorNivel('basica')}
          >
            Básica
          </button>
          <button
            className={`${styles.filterBtn} ${filtroNivel === 'intermedia' ? styles.active : ''}`}
            onClick={() => filtrarPreguntasPorNivel('intermedia')}
          >
            Intermedia
          </button>
          <button
            className={`${styles.filterBtn} ${filtroNivel === 'avanzada' ? styles.active : ''}`}
            onClick={() => filtrarPreguntasPorNivel('avanzada')}
          >
            Avanzada
          </button>
        </div>

        <ul className={styles.preguntaList}>
          {preguntasFiltradas.map((pregunta, index) => (
            <li key={pregunta.id_pregunta || index} className={styles.preguntaItem}>
              <span className={styles.nivel}> Dificultad {pregunta.dificultad}</span>
              <p className={styles.nivel}>Enunciado: <br/></p>
              <p> 
              {pregunta.enunciado}</p>
              <p className={styles.nivel}>El código de la pregunta es el siguiente:</p>
                <p >{pregunta.codigo}</p>
              <p className={styles.nivel}>
                Respuesta <br/></p><p>{pregunta.respuesta}</p>
                
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Biblioteca;