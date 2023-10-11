package ec.edu.ucacue.vacationtracking.services;

import ec.edu.ucacue.vacationtracking.domain.Request;
import lombok.Builder;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Service
@Builder
public class PeriodLimitRestriction extends Restriction{

    private static Integer maxDaysOfVacations = 5;
    public boolean validate(Request request){
        LocalDate start = LocalDate.parse(request.getStartDate().toString());
        LocalDate end = LocalDate.parse(request.getFinishDate().toString());
        Long days = ChronoUnit.DAYS.between(start, end);
        return (maxDaysOfVacations >= days);
    }
}
