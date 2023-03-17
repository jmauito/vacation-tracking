import React, { useEffect, useState, } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MainTemplate } from "../../components/template/MainTemplate";
import { RequestDetails } from "../requestDetails/RequestDetails";
import useVacationTrackingService from "../../hooks/useVacationTrackingService";


export const StatusRequest = () => {

  const [showDetail, setShowDetail] = useState(false);
  const [solicitudId, setSolicitudId] = useState(null);
  const [rows, setRows] = useState([]);
  const { getData } = useVacationTrackingService();


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
            <Button variant="contained" color="primary" onClick={() => { onDetail(params) }}>
              Detalles
            </Button>
          </div>
        );
      },
    },
  ];


  const onDetail = (params) => {
    console.log(params.row);
    alert("detail");
    setShowDetail(true);
    setSolicitudId(params.row.id);
  };
 
  useEffect(() => {
    setShowDetail(false);
    setSolicitudId(null);

    const prueba = async () => {
      const response = await getData('my-requests');
      console.log(response);
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
          <Grid container direction="column" m={4}>
            <Grid item>
              <Typography variant="h5" color="initial">
                Estado De Solicitudes
              </Typography>
            </Grid>
            <Grid textAlign={"right"} item>
              <Typography variant="body1">
                Dias de vacaciones pendientes 15
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ height: 315, width: "100%" }}>
                <DataGrid rows={rows} columns={columns} />
              </Box>
            </Grid>
          </Grid>
      }

    </MainTemplate>
  );
};
