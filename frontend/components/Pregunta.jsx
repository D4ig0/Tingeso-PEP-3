import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "../styles/preguntas.module.css";

const Pregunta = ({ pregunta, codigo, respuesta, respuestaUsuario, setRespuestaUsuario, verificarRespuestas }) => {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [esCorrecta, setEsCorrecta] = useState(false);

  const handleEsCorrecta = () => {
    setEsCorrecta(respuestaUsuario === respuesta);
  };

  useEffect(() => {
    if (verificarRespuestas) {
      handleEsCorrecta();
    }
  }, [verificarRespuestas]);

  const codigoConSaltosDeLineaReales = codigo.replace(/\\n/g, '\n');

  return (
    <div className={styles.container}>
      <p className={styles.question}>{pregunta}</p>
      <div className={styles.codeContainer}>
        <SyntaxHighlighter language="python" style={vscDarkPlus} wrapLines={true}>
          {codigoConSaltosDeLineaReales}
        </SyntaxHighlighter>
      </div>
      {!verificarRespuestas && (
        <div>
          <input
            type="text"
            value={respuestaUsuario}
            onChange={(e) => setRespuestaUsuario(e.target.value)}
          />
        </div>
      )}
      {verificarRespuestas && (
        <div className={styles.resultado}>
          <p>Tu respuesta: {respuestaUsuario}</p>
          <div>
            <p className={esCorrecta ? styles.correcto : styles.incorrecto}>
              {esCorrecta ? "¡Correcto!" : <>Respuesta incorrecta.<br />La respuesta correcta es: {respuesta}</>}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pregunta;
