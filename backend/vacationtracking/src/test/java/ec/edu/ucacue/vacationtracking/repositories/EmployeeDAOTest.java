package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.Employee;
import ec.edu.ucacue.vacationtracking.domain.Role;
import ec.edu.ucacue.vacationtracking.domain.User;
import ec.edu.ucacue.vacationtracking.exceptions.ResourceNotFoundException;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class EmployeeDAOTest {

    @TestConfiguration
    static class EmployeeDAOTestConfiguration {
        @Bean
        public IEmployeeDAO employeeDAO() {
            return new EmployeeDAO();
        }
    }

    @Autowired
    IEmployeeDAO employeeDAO;

    @Autowired
    TestEntityManager testEntityManager;

    @Test
    public void shouldRetrieveEmployeeObjectGivenAValidIdEmployee() {
        Role role = Role.builder().id(1L).build();
        testEntityManager.persist(role);
        User user = User.builder().id(1L).email("test@mail").role(role).build();
        testEntityManager.merge(user);
        testEntityManager.merge(Employee.builder().id(1L).user(user).build());
        testEntityManager.flush();
        Employee expectedEmployee = Employee.builder().id(1L).user(user).build();
        Employee retrievedEmployee = employeeDAO.findById(1L);
        assertEquals( expectedEmployee, retrievedEmployee );
    }

    @Test
    public void shouldRetrieveAResourceNotFoundExceptionGivenANotValidIdEmployee() {
        Long notValidEmployeeId = 9L;
        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () -> employeeDAO.findById(notValidEmployeeId));
        assertEquals("No se encuentra un recurso employee.id: '" + notValidEmployeeId +"'", exception.getMessage());
    }

}