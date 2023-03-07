package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Rol;

public interface IRolDAO {
    Rol findById(Long rol);
}
