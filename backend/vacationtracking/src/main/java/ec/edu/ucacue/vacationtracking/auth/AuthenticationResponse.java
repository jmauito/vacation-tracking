package ec.edu.ucacue.vacationtracking.auth;

import ec.edu.ucacue.vacationtracking.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String username;
    private String name;
    private Role role;
    private String token;
}
