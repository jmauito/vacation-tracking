package ec.edu.ucacue.vacationtracking.security;

import ec.edu.ucacue.vacationtracking.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenUtil {
    public static final Long JWT_TOKEN_VALIDITY = 5L * 60 * 60;

    @Value("${jwt.secret}")
    private String secret;

    public String generateToken(User user){
        Map<String, Object> claims = new HashMap<>();
        claims.put("userName", user.getUsername());
        claims.put("rolId", user.getRole().getId());
        return doGenerateToken(claims);
    }

    private String doGenerateToken(Map<String, Object> claims){
        byte[] secretByte = secret.getBytes();
        return Jwts.builder()
                .setSubject("subject")
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
                .signWith(SignatureAlgorithm.HS512, secretByte)
                .compact();
    }
}
