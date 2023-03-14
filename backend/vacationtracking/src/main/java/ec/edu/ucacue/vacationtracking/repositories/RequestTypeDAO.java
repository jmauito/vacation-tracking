package ec.edu.ucacue.vacationtracking.repositories;

import ec.edu.ucacue.vacationtracking.domain.RequestType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RequestTypeDAO implements IRequestTypeDAO{
    @Autowired
    RequestTypeRepository requestTypeRepository;
    @Override
    public List<RequestType> findAll() {
        return requestTypeRepository.findAll();
    }
}
