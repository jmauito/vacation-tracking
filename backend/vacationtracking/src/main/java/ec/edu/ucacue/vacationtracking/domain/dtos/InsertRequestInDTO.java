package ec.edu.ucacue.vacationtracking.domain.dtos;

import ec.edu.ucacue.vacationtracking.domain.RequestType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InsertRequestInDTO {
    private Long requestTypeId;
    private String title;
    private String comment;
    private String startDate;
    private String finishDate;
}
