package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.domain.dtos.RequestApproveInDTO;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestInboxOutDTO;
import ec.edu.ucacue.vacationtracking.exceptions.ResourceNotFoundException;
import ec.edu.ucacue.vacationtracking.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{requestId}")
    public ResponseEntity<RequestInboxOutDTO> findById(@PathVariable Long requestId){
        RequestInboxOutDTO requestInboxOutDTO;
        try {
            requestInboxOutDTO = requestService.findById(requestId);
        }catch (ResourceNotFoundException ex){
            return ResponseEntity.notFound().header("Error","Request not found").build();
        }

        return ResponseEntity.ok(requestInboxOutDTO);
    }

    @PostMapping("/{requestId}/approve")
    public ResponseEntity<Object> approve(@PathVariable Long requestId, @RequestBody RequestApproveInDTO requestApproveInDTO){
        requestService.approve(requestId, requestApproveInDTO.getObservation());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{requestId}/reject")
    public ResponseEntity<Object> reject(@PathVariable Long requestId, @RequestBody RequestApproveInDTO requestApproveInDTO){
        requestService.reject(requestId, requestApproveInDTO.getObservation());
        return ResponseEntity.ok().build();
    }
}
