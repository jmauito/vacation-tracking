package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.domain.UserDetail;
import ec.edu.ucacue.vacationtracking.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/{userName}")
    public ResponseEntity<UserDetail> findByUserName(@PathVariable String userName){
        UserDetail userDetail = userService.findByUserName(userName);
        return ResponseEntity.ok(userDetail);
    }
}
