package ec.edu.ucacue.vacationtracking.controllers;

import ec.edu.ucacue.vacationtracking.domain.dtos.RequestInboxOutDTO;
import ec.edu.ucacue.vacationtracking.services.RequestService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(RequestInboxController.class)
public class RequestInboxControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private RequestService requestService;

    @Test
    public void shouldRetrieveAListOfRequestByEmployeePending() throws Exception {

        when(requestService.findPending()).thenReturn(List.of(
                RequestInboxOutDTO.builder().id(1L).employeeId(100L).build(),
                RequestInboxOutDTO.builder().id(2L).employeeId(200L).build(),
                RequestInboxOutDTO.builder().id(3L).employeeId(300L).build()
        ));

        ResultActions response = mockMvc.perform(get("/request-inbox"));

        response.andExpect(status().isOk());

    }
}