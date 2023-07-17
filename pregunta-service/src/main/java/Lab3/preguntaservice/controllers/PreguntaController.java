package Lab3.preguntaservice.controllers;
import Lab3.preguntaservice.entities.PreguntaEntity;
import Lab3.preguntaservice.services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/preguntas")
public class PreguntaController {

    @Autowired
    private PreguntaService preguntaService;
    @GetMapping
    public ResponseEntity<List<PreguntaEntity>> obtenerPreguntas() {
        List<PreguntaEntity> preguntas = preguntaService.obtenerPreguntas();
        return ResponseEntity.ok(preguntas);}

    @PostMapping
    public ResponseEntity<?> nuevaPregunta(@RequestParam("codigo") String codigo,
                                           @RequestParam("dificultad") String dificultad,
                                           @RequestParam("respuesta") String respuesta,
                                            @RequestParam("enunciado") String enunciado) {
        preguntaService.guardarPregunta(codigo, dificultad, respuesta, enunciado);
        return ResponseEntity.ok().build();}
    @GetMapping("/obtenerEnunciado/{id}")
    public ResponseEntity<String> obtenerEnunciado(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(preguntaService.obtenerEnunciado(id));}
    @GetMapping("/obtenerCodigo/{id}")
    public ResponseEntity<String> obtenerCodigo(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(preguntaService.obtenerCodigo(id));}
    @GetMapping("/obtenerDificultad/{id}")
    public ResponseEntity<String> obtenerDificultad(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(preguntaService.obtenerDificultad(id));}

    @GetMapping("/obtenerRespuesta/{id}")
    public ResponseEntity<String> obtenerRespuesta(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(preguntaService.obtenerRespuesta(id));}

    @GetMapping("/obtenerPreguntasDificultad/{dificultad}")
    public ResponseEntity<?> obtenerPreguntasDificultad(@PathVariable("dificultad") String dificultad) {
        return ResponseEntity.ok(preguntaService.obtenerPreguntasPorDificultad(dificultad));}


}
