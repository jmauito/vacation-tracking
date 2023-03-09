package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.User;
import ec.edu.ucacue.vacationtracking.repositories.IUserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    IUserDAO userDAO;

    public User findByUserName(String userName){
        return userDAO.findByEmail(userName);
    }
}
