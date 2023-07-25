import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/prueba.module.css";
import Pregunta from "../../components/Pregunta";
import Cronometro from "../../components/Cronometro"; // Importa el componente de Cronómetro aquí
import Link from "next/link";
import PreguntaService from "/services/PreguntaService";
import PopUp from "../../components/Popup";
import { useRouter } from 'next/router';

const Prueba = () => {
  const [dificultad, setDificultad] = useState("");
  const [preguntasEjemplo, setPreguntasEjemplo] = useState([]);
  const [verificarRespuestas, setVerificarRespuestas] = useState(false);
  const [tiempoCronometro, setTiempoCronometro] = useState(null);
  const[verificador, setVerificador] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const storedDificultad = localStorage.getItem("dificultad");
    if (storedDificultad) {
      setDificultad(storedDificultad);
      PreguntaService.obtenerPreguntas(storedDificultad)
        .then((response) => {
          if (Array.isArray(response.data)) {
            setPreguntasEjemplo(response.data);
            localStorage.setItem("preguntas", JSON.stringify(response.data));
          } else {
            console.error("Error: Los datos recibidos no son un array.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener preguntas del backend:", error);
        });
    }
  }, []);


  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!verificarRespuestas) {
        setShowPopup(true);
        router.events.emit('routeChangeError');
        console.warn('Para abandonar la página, debe verificar las respuestas.');
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [verificarRespuestas]);



  const calcularPuntaje = () => {
    let puntajeTotal = 0;
    preguntasEjemplo.forEach((pregunta) => {
      if (pregunta.respuestaUsuario === pregunta.respuesta) {
        puntajeTotal += 7; 
      } else {
        puntajeTotal += 1; 
      }
    });
    return puntajeTotal;
  };

  const calcularPuntajePromedio = () => {
    const puntajeTotal = calcularPuntaje();
    const puntajePromedio = puntajeTotal / preguntasEjemplo.length;
    return puntajePromedio;
  };

  const handleVerificarRespuestas = () => {
    setVerificarRespuestas(true);
    setVerificador(true);
    localStorage.setItem('tiempoCronometro', JSON.stringify(tiempoCronometro));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Prueba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.breadcrumb}>
        <Link href="/">INICIO</Link> &gt;
        <Link href="/dificultad">DIFICULTAD</Link>
         &gt; PRUEBA
      </nav>

      <div className={styles.volver}>
        <button onClick={() => setShowPopup(true)}>
          Volver a dificultades
        </button>
        <button onClick={() => setShowPopup(true)}>
          Volver al inicio
        </button>
      </div>

      <PopUp
        isOpen={showPopup}
        onRequestClose={() => setShowPopup(false)}
        onConfirm={() => {
          setShowPopup(false);
          router.push('/'); 
        }}
      />


      
      <div className={styles.informacion}>

      <Cronometro debeDetenerse={verificarRespuestas} setTiempoCronometro={setTiempoCronometro} />
  {verificador ? (
    <div className={styles.resultado}>
      <p>Puntaje total: {calcularPuntaje()}</p>
      <p>Nota Final: {calcularPuntajePromedio()}</p>
    </div>
  ) : (
    <>
      <button className={styles.button} onClick={handleVerificarRespuestas}>Verificar respuestas</button>
    </>
  )}
  
</div>
        <p className={styles.title}>Prueba de dificultad {dificultad}</p>

        {preguntasEjemplo.map((pregunta, index) => (
          <Pregunta
            key={index}
            pregunta={pregunta.enunciado}
            codigo={pregunta.codigo}
            respuesta={pregunta.respuesta}
            respuestaUsuario={pregunta.respuestaUsuario}

            setRespuestaUsuario={(respuesta) => {
              const nuevasPreguntas = [...preguntasEjemplo];
              nuevasPreguntas[index].respuestaUsuario = respuesta;
              setPreguntasEjemplo(nuevasPreguntas);
            }}
            verificarRespuestas={verificarRespuestas} 
          />

        ))}




 

    </div>
  );
};

export default Prueba;
