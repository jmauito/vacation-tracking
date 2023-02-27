package ec.edu.ucacue.vacationtracking.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/health")
public class HealthCheckController {
    @GetMapping("/check")
    public ResponseEntity<String> check(){
        String message = "It works!";
        return ResponseEntity.ok(message);
    }
}
