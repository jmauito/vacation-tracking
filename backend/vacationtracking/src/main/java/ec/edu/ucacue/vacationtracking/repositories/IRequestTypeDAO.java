package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.RequestType;

import java.util.List;

public interface IRequestTypeDAO {
    List<RequestType> findAll();
}
