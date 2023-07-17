package Lab3.pruebaservice.repositories;
import Lab3.pruebaservice.entities.PruebaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PruebaRepository extends JpaRepository<PruebaEntity, Integer> {
    @Query("select a from PruebaEntity a")
    ArrayList<PruebaEntity> findAll();

    @Query("select a from PruebaEntity a where a.id_prueba = :id")
    PruebaEntity obtenerPregunta(@Param("id") Integer id);

}
