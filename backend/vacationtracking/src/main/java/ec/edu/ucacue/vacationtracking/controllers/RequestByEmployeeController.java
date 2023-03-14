package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.config.JwtService;
import ec.edu.ucacue.vacationtracking.domain.Employee;
import ec.edu.ucacue.vacationtracking.domain.User;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestByEmployeeOutDTO;
import ec.edu.ucacue.vacationtracking.services.EmployeeService;
import ec.edu.ucacue.vacationtracking.services.RequestService;
import ec.edu.ucacue.vacationtracking.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/my-requests")
public class RequestByEmployeeController {

    @Autowired
    RequestService requestService;
    @Autowired
    UserService userService;

    @Autowired
    EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<RequestByEmployeeOutDTO>> findRequestByEmployee(@RequestHeader("Authorization") String jwt ){
        JwtService jwtService = new JwtService();
        String email = jwtService.extractUsername(jwt.substring(7));
        User user = userService.findByUserName(email);
        Employee employee = employeeService.findByUserId(user);
        List<RequestByEmployeeOutDTO> requestByEmployeeOutDTOList = requestService.findPendingByEmployee(employee.getId());
        return ResponseEntity.ok(requestByEmployeeOutDTOList);
    }
}
