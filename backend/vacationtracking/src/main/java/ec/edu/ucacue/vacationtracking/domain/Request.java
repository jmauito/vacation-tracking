package ec.edu.ucacue.vacationtracking.domain;

import ec.edu.ucacue.vacationtracking.domain.enums.RequestStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Request {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String comment;
    private int hours;
    private Date startDate;
    private Date finishDate;
    @ManyToOne
    private RequestType requestType;
    @ManyToOne
    private Employee employee;
    private RequestStatus status;
    private String observation;
}
