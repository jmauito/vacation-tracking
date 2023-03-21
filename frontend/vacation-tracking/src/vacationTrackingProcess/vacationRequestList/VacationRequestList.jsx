import React, { useState, useEffect, useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { MainTemplate } from "../../components/template/MainTemplate";
import { VacationRequesApproval } from "../vacationRequestApproval/VacationRequestApproval";
import useVacationTrackingService from "../../hooks/useVacationTrackingService";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContext } from "../../components/contextManager/UserContext";


const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export const VacationRequestList = () => {
  // const [showSolicitud, setshowSolicitud] = useState(false);
  const { getData } = useVacationTrackingService();
  const [rows, setRows] = useState([]);
  const [requestId, setRequestId] = useState(null);
  const {showRequest, setShowRequest} = useContext(UserContext);

  const columns = [
    { field: "id", headerName: "Nro", width: 90 },
    {
      field: "employeeName",
      headerName: "Nombres y Apellidos",
      width: 150,
      editable: true,
    },
    {
      field: "requestTypeName",
      headerName: "Tipo",
      width: 250,
      editable: true,
    },
    {
      field: "startDate",
      headerName: "Inicia",
      width: 180,
      editable: true,
    },
    {
      field: "finishDate",
      headerName: "Termina",
      width: 180,
      editable: true,
    },
    {
      field: "Accion",
      headerName: "Accion",
      width: 310,
      editable: true,
      renderCell: (params) => {
        return (
          <div>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="neutral"
                onClick={() => {
                  onValidate(params);
                }}
              >
                Validar
              </Button>
            </ThemeProvider>
          </div>
        );
      },
    },
  ];

  const onValidate = (params) => {
    setRequestId(params.row.id);
    setShowRequest(true);
  };

  useEffect(() => {
    const getDataRequest = async() => {
      const response = await getData("request-inbox");
      setRows(response);
    };

    getDataRequest();
    // eslint-disable-next-line
  }, [showRequest]); 

  return (
    <MainTemplate>
      {showRequest ? (
        <VacationRequesApproval requestId={requestId}  />
      ) : (
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            xs={10}
            item
            container
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={10}>
              <Typography variant="h5">
                Lista de solicitudes de vacaciones
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Box sx={{ height: 415 }}>
              <DataGrid rows={rows} columns={columns} />
            </Box>
          </Grid>
        </Grid>
      )}
    </MainTemplate>
  );
};
