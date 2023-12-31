import axios from 'axios';

const url = 'http://localhost:8080/preguntas';

class PreguntaService {

  preguntasTotales(){
    return axios.get(url);
  }

  obtenerPreguntas(dificultad) {
    return axios.get(`${url}/obtenerPreguntasDificultad/${dificultad}`);
  }

  subirPregunta(codigo, dificultad, respuesta, enunciado, archivo) {
    const formData = new FormData();
    formData.append('codigo', codigo);
    formData.append('dificultad', dificultad);
    formData.append('respuesta', respuesta);
    formData.append('enunciado', enunciado);
    formData.append('archivo', archivo);

    return axios.post(`${url}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
  }
}

const instance = new PreguntaService();
export default instance;
