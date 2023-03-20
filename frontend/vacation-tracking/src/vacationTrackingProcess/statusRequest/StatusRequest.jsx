import React, { useEffect, useState, } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MainTemplate } from "../../components/template/MainTemplate";
import { RequestDetails } from "../requestDetails/RequestDetails";
import useVacationTrackingService from "../../hooks/useVacationTrackingService";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
      neutral: {
          main: '#64748B',
          contrastText: '#fff',
      },
  },
});

export const StatusRequest = () => {
  
  const [showDetail, setShowDetail] = useState(false);
  const [solicitudId, setSolicitudId] = useState(null);
  const [rows, setRows] = useState([]);


  const columns = [
    { field: "id", headerName: "Nro", width: 90 },
    {
      field: "requestTypeName",
      headerName: "Tipo",
      width: 200,
      editable: true,
    },
    {
      field: "startDate",
      headerName: "Inicia",
      width: 150,
      editable: true,
    },
    {
      field: "finishDate",
      headerName: "Termina",
      width: 150,
      editable: true,
    },
    {
      field: "Comentario",
      headerName: "Comentario",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Estado",
      width: 110,
      editable: true,
    },
    {
      field: "Accion",
      headerName: "Accion",
      width: 300,
      editable: true,
      renderCell: (params) => {
        return (
          <div>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="neutral" onClick={() => { onDetail(params) }}>
                Detalles
              </Button>
            </ThemeProvider>
          </div>
        );
      },
    },
  ];


  const onDetail = (params) => {
    setShowDetail(true);
    setSolicitudId(params.row.id);
  };
 

  const { getData,} = useVacationTrackingService();

  useEffect(() => {
    setShowDetail(false);
    setSolicitudId(null);

    const prueba = async () => {
      const response = await getData('my-requests');
      setRows(response);
    }

    prueba();

  }, [])

  return (
    <MainTemplate>
      {
        showDetail
          ? <RequestDetails setShowDetail={setShowDetail} solicitudId={solicitudId} />
          :
          <Grid item container direction="column" justifyContent="center"  alignItems="center">
            <Grid item container justifyContent="center"  alignItems="flex-start">
              <Grid item xs={10}>
                <Typography variant="h5" color="initial">
                  Estado de solicitudes
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={11} textAlign="right">
                <Typography variant="body1">
                  Días de vacaciones pendientes: 15
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Box sx={{ height: 315}}>
                <DataGrid rows={rows} columns={columns} />
              </Box>
            </Grid>
          </Grid>
      }

    </MainTemplate>
  );
};
