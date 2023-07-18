package Lab3.preguntaservice.services;


import Lab3.preguntaservice.entities.PreguntaEntity;
import Lab3.preguntaservice.repositories.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class PreguntaService {

    @Autowired
    private PreguntaRepository preguntaRepository;


    public  List<PreguntaEntity> obtenerPreguntas(){
       return preguntaRepository.findAll();
    }

    public void guardarPregunta(String codigo, String dificultad, String respuesta, String enunciado) {
        try {
            PreguntaEntity pregunta = new PreguntaEntity();
            pregunta.setCodigo(codigo);
            pregunta.setDificultad(dificultad);
            pregunta.setRespuesta(respuesta);
            preguntaRepository.save(pregunta);

        } catch (Exception e) {
            System.out.println("Ocurrió un error al guardar la pregunta:");
            e.printStackTrace();
        }
    }

// quizas la deba modificar

    public List<PreguntaEntity> obtenerPreguntasPorDificultad(String dificultad) {
        List<PreguntaEntity> preguntasPorDificultad = new ArrayList<>();
        // Obtener índices aleatorios para las preguntas
        List<PreguntaEntity> preguntasSeleccionadas = new ArrayList<>();

        for (PreguntaEntity pregunta : preguntaRepository.findAll()) {
            if (pregunta.getDificultad().equals(dificultad)) {
                preguntasPorDificultad.add(pregunta);
            }
        }
        List<Integer> indicesAleatorios = generarIndicesAleatorios(preguntasPorDificultad.size());

        // Verificar si hay suficientes preguntas
        if (preguntasPorDificultad.size() < 4) {

            for (int i = 0; i < preguntasPorDificultad.size(); i++) {
                int indice = indicesAleatorios.get(i);
                preguntasSeleccionadas.add(preguntasPorDificultad.get(indice));
            }
        }


        //caso ideal
        for (int i = 0; i < 4; i++) {
            int indice = indicesAleatorios.get(i);
            preguntasSeleccionadas.add(preguntasPorDificultad.get(indice));
        }
        return preguntasSeleccionadas;
    }

    private List<Integer> generarIndicesAleatorios(int max) {
        List<Integer> indices = new ArrayList<>();
        for (int i = 0; i < max; i++) {
            indices.add(i);
        }
        Collections.shuffle(indices);
        return indices;
    }

    public String obtenerEnunciado(Integer id){
        String enunciado= preguntaRepository.obtenerPregunta(id).getEnunciado();
        return enunciado;}

    public String obtenerCodigo(Integer id){
        String codigo= preguntaRepository.obtenerPregunta(id).getCodigo();
        return codigo;}

    public String obtenerRespuesta(Integer id ){
        String respuesta= preguntaRepository.obtenerPregunta(id).getRespuesta();
        return respuesta;}

    public String obtenerDificultad(Integer id ){
        String dificultad= preguntaRepository.obtenerPregunta(id).getDificultad();
        return dificultad;}
}
