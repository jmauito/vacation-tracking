package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.Request;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class PeriodLimitRestrictionTest {
    @InjectMocks
    PeriodLimitRestriction periodLimitRestriction;

    @Test
    public void shouldRetrieveTrueGivenARequestWithFourDatesRange() {
        Request request = Request.builder()
                .startDate(LocalDate.parse("2023-01-01"))
                .finishDate(LocalDate.parse("2023-01-04"))
                .build();
        boolean noRestriction = periodLimitRestriction.validate(request);
        assertTrue(noRestriction);
    }

    @Test
    public void shouldRetrieveFalseGivenARequestWithSixDatesRange() {
        Request request = Request.builder()
                .startDate(LocalDate.parse("2023-01-01"))
                .finishDate(LocalDate.parse("2023-01-07"))
                .build();
        boolean noRestriction = periodLimitRestriction.validate(request);
        assertFalse(noRestriction);
    }

    @Test
    public void shouldRetrieveTrueGivenARequestWithFiveDatesRange() {
        Request request = Request.builder()
                .startDate(LocalDate.parse("2023-01-01"))
                .finishDate(LocalDate.parse("2023-01-04"))
                .build();
        boolean noRestriction = periodLimitRestriction.validate(request);
        assertTrue(noRestriction);
    }
}