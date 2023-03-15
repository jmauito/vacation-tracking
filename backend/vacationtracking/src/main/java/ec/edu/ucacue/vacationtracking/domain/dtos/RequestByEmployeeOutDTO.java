package ec.edu.ucacue.vacationtracking.domain.dtos;

import ec.edu.ucacue.vacationtracking.domain.enums.RequestStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RequestByEmployeeOutDTO {
    private Long requestId;
    private String requestTypeName;
    private String startDate;
    private String finishDate;
    private String title;
    private RequestStatus status;

}
