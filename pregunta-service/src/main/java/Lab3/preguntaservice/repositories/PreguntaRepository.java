package Lab3.preguntaservice.repositories;


import Lab3.preguntaservice.entities.PreguntaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface PreguntaRepository extends JpaRepository<PreguntaEntity, Integer>  {

    @Query("select a from PreguntaEntity a")
    ArrayList<PreguntaEntity> findAll();

    @Query("select a from PreguntaEntity a where a.id_pregunta = :id")
    PreguntaEntity obtenerPregunta(@Param("id") Integer id);

    @Query("select a from PreguntaEntity a where a.dificultad = :dificultad")
    List<PreguntaEntity> obtenerPorDificultad(@Param("dificultad") String dificultad);




}
