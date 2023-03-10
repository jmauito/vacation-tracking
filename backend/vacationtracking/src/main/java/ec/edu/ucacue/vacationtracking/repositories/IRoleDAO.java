package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Role;

public interface IRoleDAO {
    Role findById(Long role);
}
