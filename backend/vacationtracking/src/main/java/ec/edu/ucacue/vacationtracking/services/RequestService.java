package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.config.JwtService;
import ec.edu.ucacue.vacationtracking.domain.Employee;
import ec.edu.ucacue.vacationtracking.domain.Request;
import ec.edu.ucacue.vacationtracking.domain.RequestType;
import ec.edu.ucacue.vacationtracking.domain.User;
import ec.edu.ucacue.vacationtracking.domain.dtos.InsertRequestInDTO;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestByEmployeeDetailOutDTO;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestByEmployeeOutDTO;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestInboxOutDTO;
import ec.edu.ucacue.vacationtracking.domain.enums.RequestStatus;
import ec.edu.ucacue.vacationtracking.repositories.IRequestDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class RequestService {
    @Autowired
    IRequestDAO requestDAO;

    @Autowired
    JwtService jwtService;

    @Autowired
    UserService userService;

    @Autowired
    EmployeeService employeeService;

    @Autowired
    RequestTypeService requestTypeService;

    public List<RequestInboxOutDTO> findPending(){
        List<Request> requestList = requestDAO.findPending();
        List<RequestInboxOutDTO> requestInboxOutDTOList = new ArrayList<>();
        for (Request request: requestList) {
            requestInboxOutDTOList.add( RequestInboxOutDTO.builder()
                            .id( request.getId())
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
                            .id(request.getId())
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
                .id( request.getId())
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

    public RequestByEmployeeDetailOutDTO findEmployeeRequestById(Long requestId, String token) {
        String jwt = token.substring(7);
        String email = jwtService.extractUsername(jwt);
        Request request = requestDAO.findById(requestId).orElseThrow();

        if(!email.equals(request.getEmployee().getUser().getEmail())){
            throw new RuntimeException();
        }

        RequestByEmployeeDetailOutDTO requestByEmployeeDetailOutDTO = RequestByEmployeeDetailOutDTO.builder()
                .requestId(request.getId())
                .requestTypeName(request.getRequestType().getName())
                .startDate(request.getStartDate().toString())
                .finishDate(request.getFinishDate().toString())
                .title(request.getTitle())
                .comment(request.getComment())
                .status(request.getStatus())
                .observation(request.getObservation())
                .build();
        return requestByEmployeeDetailOutDTO;
    }

    public Request insert(InsertRequestInDTO insertRequestInDTO, String jwt) throws ParseException {
        String token = jwtService.getTokenFromAuthorizationHeader(jwt);
        String email = jwtService.extractUsername(token);
        User user = userService.findByUserName(email);
        Employee employee = employeeService.findByUserId(user);
        RequestType requestType = requestTypeService.findById(insertRequestInDTO.getRequestTypeId());

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date startDate = dateFormat.parse(insertRequestInDTO.getStartDate());
        Date finishDate = dateFormat.parse(insertRequestInDTO.getFinishDate());

        Request request = Request.builder()
                .title(insertRequestInDTO.getTitle())
                .comment(insertRequestInDTO.getComment())
                .startDate(startDate)
                .finishDate(finishDate)
                .employee(employee)
                .requestType(requestType)
                .status(RequestStatus.PENDING)
                .build();

        Request savedRequest = requestDAO.save(request);
        return savedRequest;
    }

    public void approve(Long requestId, String observation) {
        Request request = requestDAO.findById(requestId).orElseThrow();
        request.setObservation(observation);
        request.setStatus(RequestStatus.APPROVED);
        requestDAO.save(request);
    }

    public void reject(Long requestId, String observation) {
        Request request = requestDAO.findById(requestId).orElseThrow();
        request.setObservation(observation);
        request.setStatus(RequestStatus.REJECTED);
        requestDAO.save(request);
    }
}
