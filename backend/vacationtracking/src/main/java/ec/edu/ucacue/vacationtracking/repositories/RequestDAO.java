package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RequestDAO implements IRequestDAO{
    @Autowired
    RequestRepository requestRepository;


    @Override
    public List<Request> findPending() {
        return requestRepository.findByValidated(true);
    }

    @Override
    public List<Request> findPendingByEmployee(Long employeeId) {
        return requestRepository.findByEmployeeId(employeeId);
    }
}
