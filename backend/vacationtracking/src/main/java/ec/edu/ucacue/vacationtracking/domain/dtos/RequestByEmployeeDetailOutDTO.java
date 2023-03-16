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
public class RequestByEmployeeDetailOutDTO {
    private Long requestId;
    private String requestTypeName;
    private String startDate;
    private String finishDate;
    private String title;
    private String comment;
    private RequestStatus status;
    private String observation;
}
