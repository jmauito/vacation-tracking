package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.config.JwtService;
import ec.edu.ucacue.vacationtracking.domain.Employee;
import ec.edu.ucacue.vacationtracking.domain.Request;
import ec.edu.ucacue.vacationtracking.domain.User;
import ec.edu.ucacue.vacationtracking.domain.dtos.InsertRequestInDTO;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestByEmployeeDetailOutDTO;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestByEmployeeOutDTO;
import ec.edu.ucacue.vacationtracking.services.EmployeeService;
import ec.edu.ucacue.vacationtracking.services.RequestService;
import ec.edu.ucacue.vacationtracking.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.text.ParseException;
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

    @GetMapping("/{requestId}")
    public ResponseEntity<RequestByEmployeeDetailOutDTO> findById(@PathVariable Long requestId, @RequestHeader("Authorization") String jwt){
        RequestByEmployeeDetailOutDTO requestByEmployeeDetailOutDTO = requestService.findEmployeeRequestById(requestId, jwt);
        return ResponseEntity.ok(requestByEmployeeDetailOutDTO);
    }

    @PostMapping
    public ResponseEntity<Object> insertRequest(@RequestBody InsertRequestInDTO insertRequestInDTO, @RequestHeader("Authorization") String jwt){
        Request request = null;
        try {
            request = requestService.insert(insertRequestInDTO, jwt);
        }catch (ParseException ex){
            ResponseEntity.badRequest().header("Error", "Revisar el formato de las fechas");
        }

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(request.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
