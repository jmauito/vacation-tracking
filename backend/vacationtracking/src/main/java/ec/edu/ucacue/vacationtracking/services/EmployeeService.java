package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.Employee;
import ec.edu.ucacue.vacationtracking.domain.User;
import ec.edu.ucacue.vacationtracking.repositories.IEmployeeDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    IEmployeeDAO employeeDAO;

    public Optional<Employee> findById(Long id){
        return employeeDAO.findById(id);
    }

    public Employee findByUserId(User user) {
        Optional<Employee> employee = employeeDAO.findByUserId(user.getId());
        return employee.orElseThrow();
    }
}
