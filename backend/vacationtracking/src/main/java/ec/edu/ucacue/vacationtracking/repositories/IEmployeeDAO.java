package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Employee;

import java.util.Optional;

public interface IEmployeeDAO {
    Optional<Employee> findById(Long id);
}
