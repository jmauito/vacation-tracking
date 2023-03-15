package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Request;
import ec.edu.ucacue.vacationtracking.domain.enums.RequestStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RequestDAO implements IRequestDAO{
    @Autowired
    RequestRepository requestRepository;


    @Override
    public List<Request> findPending() {
        return requestRepository.findByStatus(RequestStatus.PENDING);
    }

    @Override
    public List<Request> findPendingByEmployee(Long employeeId) {
        return requestRepository.findByEmployeeId(employeeId);
    }
}
