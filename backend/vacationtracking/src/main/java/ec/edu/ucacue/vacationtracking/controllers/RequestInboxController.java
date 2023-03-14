package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.domain.dtos.RequestInboxOutDTO;
import ec.edu.ucacue.vacationtracking.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@Secured("ROLE_ADMIN")
@RequestMapping("/request-inbox")
public class RequestInboxController {
    @Autowired
    RequestService requestService;
    @GetMapping
    public ResponseEntity<List<RequestInboxOutDTO>> findPending(){
        List<RequestInboxOutDTO> requests = requestService.findPending();
        return ResponseEntity.ok(requests);
    }
}
