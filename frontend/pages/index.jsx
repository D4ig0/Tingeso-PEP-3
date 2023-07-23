import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Python Dojo
        </h1>

        <p className={styles.description}>
        Domina Python en el dojo de la programación y desafía tus habilidades con entrenamientos de diferentes niveles.
        </p>

        <div className={styles.grid}>
          <a href="/dificultad" className={styles.card}>
            <h2>Entrenar&rarr;</h2>
            <p></p>
          </a>

          <a href="/biblioteca" className={styles.card}>
            <h2>Preguntas &rarr;</h2>
            <p></p>
          </a>

        </div>
      </main>

      
    </div>
  )
}
