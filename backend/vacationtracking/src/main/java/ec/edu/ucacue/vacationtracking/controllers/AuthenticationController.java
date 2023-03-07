package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<String> generateJwt(@RequestParam Map<String, String> body){
        String token;
        try {
            token = authenticationService.generateJwt(body.get("userName"), body.get("password"));
        }
        catch (Exception ex){
            return ResponseEntity.badRequest().header("Error", ex.getMessage().toString()).build();
        }

        return ResponseEntity.ok(token);
    }
}
