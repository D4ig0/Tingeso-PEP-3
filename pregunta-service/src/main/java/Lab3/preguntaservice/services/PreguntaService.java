package Lab3.preguntaservice.services;


import Lab3.preguntaservice.entities.PreguntaEntity;
import Lab3.preguntaservice.repositories.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    public void guardarPregunta(MultipartFile codigo, String dificultad, String respuesta, String enunciado) {
        PreguntaEntity pregunta = new PreguntaEntity();
        try {
            byte[] codigoBytes = codigo.getBytes();
            String codigoString = new String(codigoBytes);
            pregunta.setDificultad(dificultad);
            pregunta.setCodigo(codigoString);
            pregunta.setRespuesta(respuesta);
            pregunta.setEnunciado(enunciado);
            preguntaRepository.save(pregunta);

        } catch (Exception e) {
            System.out.println("Ocurrió un error al guardar la pregunta:");
            e.printStackTrace();
        }
    }

// quizas la deba modificar

    public List<PreguntaEntity> obtenerPreguntasPorDificultad(String dificultad) {
        List<PreguntaEntity> preguntasPorDificultad = preguntaRepository.obtenerPorDificultad(dificultad);

        // Log para verificar la cantidad de preguntas por dificultad
        System.out.println("Preguntas encontradas para la dificultad " + dificultad + ": " + preguntasPorDificultad.size());

        // Validar si hay suficientes preguntas
        if (preguntasPorDificultad.size() < 4) {
            System.out.println("Advertencia: No hay suficientes preguntas para la dificultad proporcionada. Se devolverán todas las preguntas disponibles.");
            return preguntasPorDificultad; // Devuelve todas las preguntas disponibles en este caso
        }

        List<PreguntaEntity> preguntasSeleccionadas = new ArrayList<>();
        List<Integer> indicesAleatorios = generarIndicesAleatorios(preguntasPorDificultad.size());

        // Seleccionar 4 preguntas aleatorias
        for (int i = 0; i < 4; i++) {
            int indice = indicesAleatorios.get(i);
            preguntasSeleccionadas.add(preguntasPorDificultad.get(indice));
        }

        // Log para verificar las preguntas seleccionadas
        System.out.println("Preguntas seleccionadas: " + preguntasSeleccionadas);

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
