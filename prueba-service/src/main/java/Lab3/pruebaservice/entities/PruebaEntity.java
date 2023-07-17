package Lab3.pruebaservice.entities;
import Lab3.pruebaservice.models.PreguntaModel;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "pruebas")
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Data
public class PruebaEntity {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Integer id_prueba;

    private Double promedio;
    private String dificultad_prueba;

}
