package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Request;

import java.util.List;

public interface IRequestDAO {
    List<Request> findAllRequest();
}
