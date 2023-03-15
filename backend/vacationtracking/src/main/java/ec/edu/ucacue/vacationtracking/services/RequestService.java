package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.Request;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestByEmployeeOutDTO;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestInboxOutDTO;
import ec.edu.ucacue.vacationtracking.exceptions.ResourceNotFoundException;
import ec.edu.ucacue.vacationtracking.repositories.IRequestDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RequestService {
    @Autowired
    IRequestDAO requestDAO;

    public List<RequestInboxOutDTO> findPending(){
        List<Request> requestList = requestDAO.findPending();
        List<RequestInboxOutDTO> requestInboxOutDTOList = new ArrayList<>();
        for (Request request: requestList) {
            requestInboxOutDTOList.add( RequestInboxOutDTO.builder()
                            .requestId( request.getId())
                            .employeeId(request.getEmployee().getId())
                            .employeeName(request.getEmployee().getName())
                            .requestTypeId(request.getRequestType().getId())
                            .requestTypeName(request.getRequestType().getName())
                            .startDate(request.getStartDate().toString())
                            .finishDate(request.getFinishDate().toString())
                            .title(request.getTitle())
                            .comment(request.getComment())
                    .build() );
        }
        return requestInboxOutDTOList;
    }

    public List<RequestByEmployeeOutDTO> findPendingByEmployee(Long employeeId){
        List<Request> requestList = requestDAO.findPendingByEmployee(employeeId);
        List<RequestByEmployeeOutDTO> requestByEmployeeOutDTOList = new ArrayList<>();
        for(Request request : requestList){
            requestByEmployeeOutDTOList.add( RequestByEmployeeOutDTO.builder()
                            .requestId(request.getId())
                            .requestTypeName(request.getRequestType().getName())
                            .startDate(request.getStartDate().toString())
                            .finishDate(request.getFinishDate().toString())
                            .title(request.getTitle())
                            .status(request.getStatus())
                    .build() );
        }
        return requestByEmployeeOutDTOList;
    }

    public RequestInboxOutDTO findById(Long requestId) {
        Request request = requestDAO.findById(requestId).orElseThrow();
        RequestInboxOutDTO requestInboxOutDTO = RequestInboxOutDTO.builder()
                .requestId( request.getId())
                .employeeId(request.getEmployee().getId())
                .employeeName(request.getEmployee().getName())
                .requestTypeId(request.getRequestType().getId())
                .requestTypeName(request.getRequestType().getName())
                .startDate(request.getStartDate().toString())
                .finishDate(request.getFinishDate().toString())
                .title(request.getTitle())
                .comment(request.getComment())
                .build();
        return requestInboxOutDTO;
    }
}
