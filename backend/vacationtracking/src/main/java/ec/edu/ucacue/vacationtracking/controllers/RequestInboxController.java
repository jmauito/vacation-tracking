package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.domain.Request;
import ec.edu.ucacue.vacationtracking.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/request-inbox")
public class RequestInboxController {
    @Autowired
    RequestService requestService;
    @GetMapping
    public ResponseEntity<List<Request>> findAll(){
        /*List<Request> requests = List.of(
            Request.builder().title("Solicitud uno").comment("Comentario 1").hours(0).dates( List.of("2023-01-01", "2023-01-15") ).build(),
            Request.builder().title("Solicitud dos").comment("Comentario 2").hours(0).dates( List.of("2023-02-01", "2023-02-20") ).build(),
            Request.builder().title("Solicitud tres").comment("Comentario 3").hours(0).dates( List.of("2023-02-01", "2023-02-20") ).build(),
            Request.builder().title("Solicitud cuatro").comment("Comentario 4").hours(0).dates( List.of("2023-02-01", "2023-02-20") ).build(),
            Request.builder().title("Solicitud cinco").comment("Comentario 5").hours(0).dates( List.of("2023-02-01", "2023-02-20") ).build()
        );*/
        List<Request> requests = requestService.findAll();
        return ResponseEntity.ok(requests);
    }
}
