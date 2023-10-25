package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.config.TestJwtAuthenticationFilter;
import ec.edu.ucacue.vacationtracking.config.TestSecurityConfig;
import ec.edu.ucacue.vacationtracking.domain.dtos.RequestInboxOutDTO;
import ec.edu.ucacue.vacationtracking.services.RequestService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(RequestInboxController.class)
@ContextConfiguration(classes = {RequestInboxController.class, TestJwtAuthenticationFilter.class, TestSecurityConfig.class})
public class RequestInboxControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private RequestService requestService;

    @Test
    @WithMockUser
    public void shouldRetrieveAListOfRequestByEmployeePending() throws Exception {

        when(requestService.findPending()).thenReturn(List.of(
                RequestInboxOutDTO.builder().id(1L).employeeId(100L).build(),
                RequestInboxOutDTO.builder().id(2L).employeeId(200L).build(),
                RequestInboxOutDTO.builder().id(3L).employeeId(300L).build()
        ));

        ResultActions response = mockMvc.perform(get("/request-inbox").header("Authorization", "Bearer " + "algo"));

        response.andExpect(status().isOk());

        response.andDo(print()).andExpect(jsonPath("$[*].id").value(Matchers.containsInAnyOrder(1,2,3)));
        response.andDo(print()).andExpect(jsonPath("$[*].employeeId").value(Matchers.containsInAnyOrder(100,200,300)));

    }
}