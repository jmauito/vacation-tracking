package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Employee;
import ec.edu.ucacue.vacationtracking.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class EmployeeDAO implements IEmployeeDAO{
    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public Employee findById(Long id) {
        return employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("employee.id: '" + id + "'"));
    }

    @Override
    public Optional<Employee> findByUserId(Long userId) {
        return employeeRepository.findByUserId(userId);
    }
}
