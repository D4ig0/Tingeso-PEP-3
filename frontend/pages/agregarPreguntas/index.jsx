import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../../styles/agregarPreguntas.module.css';
import PreguntaService from "/services/PreguntaService";

const SubirPreguntas = () => {
  const [codigo, setCodigo] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [enunciado, setEnunciado] = useState('');
  const [alerta, setAlerta] = useState(false);

  const handleAlerta = () => {
    setAlerta(false); 
  };

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
    PreguntaService.subirPregunta(codigo, dificultad, respuesta, enunciado)
      .then((response) => {
        console.log('Pregunta subida exitosamente:', response.data);
        setAlerta(true);
      })
      .catch((error) => {
        console.error('Error al subir pregunta:', error);
        window.alert('Error al subir pregunta');
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <div className={styles.titulo}>
          Crea tu pregunta
        </div>
        <p className={styles.comentario}>Deberás ingresar tu archivo, seleccionar la dificultad de este e ingresar la respuesta asociada a este problema.</p>

        <div className={styles.flexboxContainer}>
          <div className={styles.dificultad}>
            <label className={styles.comentario2}>Escoge la dificultad:</label>
            <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
              <option value="" disabled hidden>Selecciona la dificultad</option>
              <option value="basica">Básica</option>
              <option value="intermedia">Intermedia</option>
              <option value="avanzada">Avanzada</option>
            </select>
          </div>

          <div className={styles.inputFile}>
            <label >Ingresa tu archivo</label>
            <input type="file" onChange={(e) => setCodigo(e.target.files[0])} />
          </div>

          <div className={styles.ingresa}>
            <label >Ingresa el enunciado que tendrá tu pregunta</label>
            <input className={styles.respuesta} type="text" placeholder="Enunciado" onChange={(e) => setEnunciado(e.target.value)} />
          </div>
        </div>
        <div className={styles.ingresa}>
          <label >Ingresa la respuesta de tu pregunta de python</label>
          <input className={styles.respuesta} type="text" placeholder="Respuesta" onChange={(e) => setRespuesta(e.target.value)} />
        </div>
        <button type="button" className={styles.animatedButton} onClick={onClickHandler}>
          Crear Pregunta
        </button>
        <Modal
          isOpen={alerta}
          onRequestClose={handleAlerta}
          className={styles.modalContent}
          overlayClassName={styles.modalOverlay}
          contentLabel="Subir Pregunta"
        >
          <h2 className={styles.modalTitle}>Pregunta subida exitosamente</h2>
          <p className={styles.modalMessage}>Tu pregunta se ha subido correctamente y está lista para ser utilizada.</p>
          <div className={styles.modalButtons}>
            <button className={styles.confirmButton} onClick={handleAlerta}>Cerrar</button>
          </div>
        </Modal>

      </div>
    </div>
  );
};

export default SubirPreguntas;

