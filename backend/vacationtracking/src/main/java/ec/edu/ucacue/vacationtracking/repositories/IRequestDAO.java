package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Request;

import java.util.List;
import java.util.Optional;

public interface IRequestDAO {
    List<Request> findPending();
    List<Request> findPendingByEmployee(Long userId);

    Optional<Request> findById(Long requestId);

    Request save(Request request);
}
