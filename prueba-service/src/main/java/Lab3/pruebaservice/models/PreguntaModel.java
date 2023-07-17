package Lab3.pruebaservice.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PreguntaModel {

    private Integer id_pregunta;
    private String dificultad;
    private String  enunciado;
    private String respuesta;
    private String codigo;


}
