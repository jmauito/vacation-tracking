package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.UserDetail;

public interface IUserDAO {
    UserDetail findByUserName(String userName);
}
