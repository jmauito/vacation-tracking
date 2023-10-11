package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.Request;
import ec.edu.ucacue.vacationtracking.domain.RequestType;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestByEmployeeOutDTO;
import ec.edu.ucacue.vacationtracking.repositories.IRequestDAO;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class RequestServiceTest {
    @InjectMocks
    RequestService requestService;
    @Mock
    IRequestDAO requestDAO;

    @Test
    public void shouldRetrieveAListOfPendingRequestFromAnEmployeeGivenAnEmployeeId () {
        List<RequestByEmployeeOutDTO> expectedList = List.of(
                RequestByEmployeeOutDTO.builder()
                        .id(1L)
                        .requestTypeName("request type")
                        .startDate("2023-01-01")
                        .finishDate("2023-01-15")
                        .build(),
                RequestByEmployeeOutDTO.builder()
                        .id(2L)
                        .requestTypeName("request type")
                        .startDate("2023-01-01")
                        .finishDate("2023-01-15")
                        .build(),
                RequestByEmployeeOutDTO.builder()
                        .id(3L)
                        .requestTypeName("request type")
                        .startDate("2023-01-01")
                        .finishDate("2023-01-15")
                        .build()
        );

        when(requestDAO.findPendingByEmployee(anyLong())).thenReturn(List.of(
                Request.builder()
                        .id(1L)
                        .requestType(RequestType.builder().id(1L).name("request type").build())
                        .startDate(LocalDate.parse("2023-01-01"))
                        .finishDate(LocalDate.parse("2023-01-15"))
                        .build(),
                Request.builder()
                        .id(2L)
                        .requestType(RequestType.builder().id(1L).name("request type").build())
                        .startDate(LocalDate.parse("2023-01-01"))
                        .finishDate(LocalDate.parse("2023-01-15"))
                        .build(),
                Request.builder()
                        .id(3L)
                        .requestType(RequestType.builder().id(1L).name("request type").build())
                        .startDate(LocalDate.parse("2023-01-01"))
                        .finishDate(LocalDate.parse("2023-01-15"))
                        .build()
        ));

        List<RequestByEmployeeOutDTO> retrievedList = requestService.findPendingByEmployee(1L);

        expectedList.forEach( e -> assertTrue( retrievedList.stream().filter( r -> r.equals(e) ).findAny().isPresent() ) );
    }

}