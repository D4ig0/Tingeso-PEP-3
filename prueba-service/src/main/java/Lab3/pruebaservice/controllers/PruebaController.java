package Lab3.pruebaservice.controllers;
import Lab3.pruebaservice.entities.PruebaEntity;
import Lab3.pruebaservice.services.PruebaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/pruebas")
public class PruebaController {

    @Autowired
    private PruebaService pruebaService;

    @GetMapping
    public ResponseEntity<PruebaEntity> generarPrueba() {
        PruebaEntity prueba = pruebaService.generarPrueba();
        return ResponseEntity.ok(prueba);}

}
