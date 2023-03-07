package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.UserDetail;
import ec.edu.ucacue.vacationtracking.security.JwtTokenUtil;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @Autowired
    UserService userService;

    public String generateJwt(String userName, String password){
        UserDetail user = userService.findByUserName(userName);
        if (!user.getPassword().equals(password)){
            throw new RuntimeException("La contraseña no coincide");
        }
        return jwtTokenUtil.generateToken(user);
    }

}
