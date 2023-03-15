package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.RequestType;

import java.util.List;
import java.util.Optional;

public interface IRequestTypeDAO {
    List<RequestType> findAll();

    Optional<RequestType> findById(Long requestTypeId);
}
