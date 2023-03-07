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
        List<Request> requests = requestService.findAll();
        return ResponseEntity.ok(requests);
    }
}
