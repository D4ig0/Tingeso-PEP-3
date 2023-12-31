package Lab3.preguntaservice.entities;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@Table(name = "preguntas")
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Data
public class PreguntaEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Integer id_pregunta;
    private String dificultad;
    private String  enunciado;
    private String respuesta;
    private String codigo;

}
