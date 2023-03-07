package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.UserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAO implements IUserDAO{
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetail findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
