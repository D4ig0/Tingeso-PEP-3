import React, { useState } from 'react';
import styles from '../../styles/subirPreguntas.module.css';
import PreguntaService from "/services/PreguntaService";

const SubirPreguntas = () => {
  const [codigo, setCodigo] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [enunciado, setEnunciado] = useState('');

  const onClickHandler = () => {
    if (codigo === '' || dificultad === '' || respuesta === '' || enunciado === '') {
      window.alert('Rellene todos los campos');
      return;
    }

    const nombreArchivo = codigo?.name;
    
    if (nombreArchivo && nombreArchivo.split('.').pop() !== 'py') {
      window.alert('Solo se aceptan archivos .py');
      return;
    }
    console.log('Nombre del archivo:', nombreArchivo);
    console.log('Dificultad:', dificultad);
    console.log('Respuesta:', respuesta);
    console.log('Enunciado:', enunciado);
    console.log('Archivo:', codigo);

    PreguntaService.subirPregunta(codigo, dificultad, respuesta, enunciado)
    .then((response) => {
      console.log('Pregunta subida exitosamente:', response.data);
      window.alert('Pregunta subida exitosamente');
    })
    .catch((error) => {
      console.error('Error al subir pregunta:', error);
      window.alert('Error al subir pregunta');
    });


   
  };
  
  return (
    <div className={styles.container}>
      <br />
      Selecciona tu archivo.
      <p className={styles.comentario}>Deberás ingresar tu archivo, seleccionar la dificultad de este e ingresar la respuesta asociada a este problema.</p>
      <div className={styles.comentario}>Solo se aceptan archivos .py</div>
      <div className={styles.flexboxContainer}>
        <div className={styles.cajita}>
          <label className={styles.comentario2}>Dificultad:</label>
          <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
            <option value="">Seleccione una dificultad</option>
            <option value="basica">Básica </option>
            <option value="intermedia">Intermedia </option>
            <option value="avanzada">Avanzada </option>
          </select>
        </div>
        <div className={styles.inputFile}>
          <input type="file" onChange={(e) => setCodigo(e.target.files[0])} />
          {codigo?.name}
        </div>
        <div>
          <input className={styles.respuesta} type="text" placeholder="Respuesta" onChange={(e) => setRespuesta(e.target.value)} />
        </div>
        <div>
          <input className={styles.respuesta} type="text" placeholder="Enunciado" onChange={(e) => setEnunciado(e.target.value)} />
        </div>
      </div>
      <button type="button" className={styles.animatedButton} onClick={onClickHandler}>
        Crear Pregunta
      </button>
    </div>
  );
};

export default SubirPreguntas;

