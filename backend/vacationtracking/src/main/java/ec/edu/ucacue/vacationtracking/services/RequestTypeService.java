package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.RequestType;
import ec.edu.ucacue.vacationtracking.repositories.IRequestTypeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestTypeService {
    @Autowired
    IRequestTypeDAO requestTypeDAO;

    public List<RequestType> findAll(){
        return requestTypeDAO.findAll();
    }

    public RequestType findById(Long requestTypeId) {
        return requestTypeDAO.findById(requestTypeId).orElseThrow();
    }
}
