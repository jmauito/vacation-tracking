package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.User;

public interface IUserDAO {
    User findByEmail(String email);
}
