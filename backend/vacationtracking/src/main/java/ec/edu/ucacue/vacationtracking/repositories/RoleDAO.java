package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RoleDAO implements IRoleDAO {
    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role findById(Long role) {
        return roleRepository.findById(role).orElseThrow();
    }
}
