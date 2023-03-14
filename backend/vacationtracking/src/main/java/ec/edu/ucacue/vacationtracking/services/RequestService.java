package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.Request;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestOutDTO;
import ec.edu.ucacue.vacationtracking.repositories.IRequestDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RequestService {
    @Autowired
    IRequestDAO requestDAO;

    public List<RequestOutDTO> findPending(){
        List<Request> requestList = requestDAO.findPending();
        List<RequestOutDTO> requestOutDTOList = new ArrayList<>();
        for (Request request: requestList) {
            requestOutDTOList.add( RequestOutDTO.builder()
                            .requestId( request.getId())
                            .employeeId(request.getEmployee().getId())
                            .employeeName(request.getEmployee().getName())
                            .requestTypeId(request.getRequestType().getId())
                            .startDate(request.getStartDate().toString())
                            .finishDate(request.getFinishDate().toString())
                            .title(request.getTitle())
                            .comment(request.getComment())
                    .build() );
        }
        return requestOutDTOList;
    }
}
