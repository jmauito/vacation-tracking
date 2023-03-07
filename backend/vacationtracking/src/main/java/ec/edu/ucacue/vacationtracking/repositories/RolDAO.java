package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Rol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RolDAO implements IRolDAO{
    @Autowired
    RolRepository rolRepository;

    @Override
    public Rol findById(Long rol) {
        return rolRepository.findById(rol).orElseThrow();
    }
}
