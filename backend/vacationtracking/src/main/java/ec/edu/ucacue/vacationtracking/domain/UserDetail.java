package ec.edu.ucacue.vacationtracking.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDetail {
    @Id
    private Long id;
    private String userName;
    @JsonIgnore
    private String password;
    @ManyToOne
    private Rol rol;
}
