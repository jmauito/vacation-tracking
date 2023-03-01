package ec.edu.ucacue.vacationtracking.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Builder
@Data
public class Request {
    private String title;
    private String comment;
    private int hours;
    private List<String> dates;
}
