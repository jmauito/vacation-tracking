package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
