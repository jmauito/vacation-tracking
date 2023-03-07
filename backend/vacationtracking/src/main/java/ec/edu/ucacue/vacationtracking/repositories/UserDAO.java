package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.UserDetail;
import ec.edu.ucacue.vacationtracking.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserDAO implements IUserDAO{
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetail findByUserName(String userName) {
        Optional<UserDetail> user = userRepository.findByUserName(userName);
        if(user.isEmpty()){
            throw new ResourceNotFoundException(userName);
        }
        return user.get();
    }
}
