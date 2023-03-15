package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Request;
import ec.edu.ucacue.vacationtracking.domain.enums.RequestStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Optional<Request> findById(Long requestId) {
        return requestRepository.findById(requestId);
    }
}
