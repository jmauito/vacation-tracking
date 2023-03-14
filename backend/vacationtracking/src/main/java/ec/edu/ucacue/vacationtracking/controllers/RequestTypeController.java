package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.domain.RequestType;
import ec.edu.ucacue.vacationtracking.services.RequestTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("requests-types")
public class RequestTypeController {
    @Autowired
    RequestTypeService requestTypeService;

    @GetMapping
    public ResponseEntity<List<RequestType>> findAll(){
        List<RequestType> requestTypeList = requestTypeService.findAll();
        return ResponseEntity.ok(requestTypeList.stream().toList());
    }

}
