package Lab3.pruebaservice.services;


import Lab3.pruebaservice.entities.PruebaEntity;
import Lab3.pruebaservice.models.PreguntaModel;
import Lab3.pruebaservice.repositories.PruebaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class PruebaService {

    @Autowired
    private PruebaRepository pruebaRepository;

    @Autowired
    RestTemplate restTemplate;

    //Mediante RestTemplate
    /////////////////////////////////////////////////////////////////////////////////
    public List<PreguntaModel> obtenerPreguntas(){
        PreguntaModel[] preguntas =  restTemplate.getForObject("http://proveedor-service/preguntas",PreguntaModel[].class);
        return Arrays.asList(preguntas);
    }
    public Integer cantidadTurnoM (String codigo){
        Integer turnoM= restTemplate.getForObject("http://acopio-service/acopios/cantidadTurnoM/" +codigo, Integer.class);
        return turnoM;
    }

    /////////////////////////////////////////////////////////////////////////////////

    public PruebaEntity generarPrueba() {
        List<PreguntaModel> preguntas = obtenerPreguntas();

        PruebaEntity pruebaEntity = new PruebaEntity();
        pruebaEntity.setPreguntas(preguntas);

        return pruebaEntity;
    }
