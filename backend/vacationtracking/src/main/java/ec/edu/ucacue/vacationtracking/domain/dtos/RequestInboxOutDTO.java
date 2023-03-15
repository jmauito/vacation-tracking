package ec.edu.ucacue.vacationtracking.domain.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RequestInboxOutDTO {
    private Long requestId;
    private Long employeeId;
    private String employeeName;
    private Long requestTypeId;
    private String requestTypeName;
    private String startDate;
    private String finishDate;
    private String title;
    private String comment;
}
