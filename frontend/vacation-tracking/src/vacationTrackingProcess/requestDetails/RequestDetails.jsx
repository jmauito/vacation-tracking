import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useVacationTrackingService from "../../hooks/useVacationTrackingService";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export const RequestDetails = ({ setShowDetail, solicitudId }) => {
  const { getData } = useVacationTrackingService();
  const [status, setStatus] = useState(null);
  const [requestTypeName, setRequestTypeName] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [comment, setComment] = useState(null);

  const onReturn = () => {
    setShowDetail(false);
  };

  useEffect(() => {
    const prueba = async () => {
      const response = await getData("my-requests/" + solicitudId);
      setStatus(response.status);
      setRequestTypeName(response.requestTypeName);
      setStartDate(response.startDate);
      setComment(response.comment);
    };

    prueba();
  }, );

  return (
    <Grid container direction="column" p={4} spacing={3}>
      <Grid item xs={10}>
        <Typography variant="h4" fontSize={30}>
          Detalles de la Solicitud
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" fontSize={20}>
          Estado:{status}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" fontSize={20}>
          Tipo: {requestTypeName}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" fontSize={20}>
          Inicio:{startDate}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" fontSize={20}>
          Comentario:{comment}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h4" fontSize={30}>
          Detalles de la Validación
        </Typography>
        <Typography variant="h4" fontSize={15} m={2}>
          *No cumple con el tiempo minimo entre solicitudes de vacaciones
        </Typography>
        <Typography variant="h4" fontSize={15} m={2}>
          *Restricción: Su cargo necesita dejar algún reemplazo,no se encontro
          reemplazo disponible
        </Typography>
        <Typography variant="h4" fontSize={15} m={2}>
          *Restricción: Su cargo no puede solicitar vacaiones para los dias
          Jueves
        </Typography>
      </Grid>
      <Grid container justifyContent="center"  alignItems="flex-end">
        <ThemeProvider theme={theme}>
          <Button color="neutral" variant="contained" onClick={onReturn}>
            Retomar
          </Button>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};
