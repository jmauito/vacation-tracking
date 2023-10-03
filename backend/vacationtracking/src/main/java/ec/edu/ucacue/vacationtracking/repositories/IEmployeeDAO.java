package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Employee;

import java.util.Optional;

public interface IEmployeeDAO {
    Employee findById(Long id);

    Optional<Employee> findByUserId(Long userId);
}
