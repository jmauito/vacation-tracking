package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.config.TestJwtAuthenticationFilter;
import ec.edu.ucacue.vacationtracking.config.TestSecurityConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(HealthCheckController.class)
@ContextConfiguration(classes = {HealthCheckController.class, TestJwtAuthenticationFilter.class, TestSecurityConfig.class})
class HealthCheckControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Test
    public void shouldRetrieveHttpStatusOkGivenARequestWithoutToken () throws Exception {
        ResultActions response = mockMvc.perform(get("/health/check"));
        response.andExpect(status().isOk());
    }
    @Test
    @WithMockUser
    public void shouldRetrieveHttpStatusOkGivenARequestWithToken () throws Exception {
        ResultActions response = mockMvc.perform(get("/health/check")
                .header("Authorization", "Bearer " + "algo"));
        response.andExpect(status().isOk());
    }
    @Test
    @WithMockUser
    public void shouldRetrieveHttpStatusOkGivenARequestOnAPrivateRouteWithToken () throws Exception {
        ResultActions response = mockMvc.perform(get("/health/check/private")
                .header("Authorization", "Bearer " + "algo"));
        response.andExpect(status().isOk());
    }
    @Test
    public void shouldRetrieveHttpStatusForbiddenGivenARequestOnAPrivateRouteWithoutToken () throws Exception {
        ResultActions response = mockMvc.perform(get("/health/check/private"));
        response.andExpect(status().isForbidden());
    }

}