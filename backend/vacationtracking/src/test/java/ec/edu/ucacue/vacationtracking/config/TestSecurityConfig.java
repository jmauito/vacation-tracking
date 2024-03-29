package ec.edu.ucacue.vacationtracking.config;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@TestConfiguration
public class TestSecurityConfig {
    private TestJwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable()
                .authorizeHttpRequests().requestMatchers("/health/check","/api/v1/auth/**").permitAll()
                .and()
                .authorizeHttpRequests().requestMatchers("/health/**").authenticated()
                .and()
                .authorizeHttpRequests().anyRequest().authenticated();
        return httpSecurity.build();
    }
}
