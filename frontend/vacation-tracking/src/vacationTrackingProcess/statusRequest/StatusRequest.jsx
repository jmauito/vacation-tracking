import React, { useEffect, useState, } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MainTemplate } from "../../components/template/MainTemplate";
import { RequestDetails } from "../requestDetails/RequestDetails";
import useVacationTrackingService from "../../hooks/useVacationTrackingService";


const rows2 = [
  {
    id: 1,
    Tipo: "Tiempo de vacaciones",
    Inicia: "01-Ene-2023",
    Termina: "15-Ene-2023",
    Comentario: "",
    Accion: "Detalles",
  },
  {
    id: 2,
    Tipo: "Licencia",
    Inicia: "01-Ene-2023",
    Termina: "15-Ene-2023",
    Comentario: "",
    Accion: "Detalles",
  },
  {
    id: 3,
    Tipo: "Tiempo de vacaciones",
    Inicia: "30-Ene-2023",
    Termina: "15-Feb-2023",
    Comentario: "Solicitud de licencia para atender actividades familiares",
    Accion: "Detalles",
  },
  {
    id: 4,
    Tipo: "Licencia",
    Inicia: "20-Feb-2023",
    Termina: "01-Mar-2023",
    Comentario: "",
    Accion: "Detalles",
  },
];



export const StatusRequest = () => {

  const [showDetail, setShowDetail] = useState(false);
  const [solicitudId, setSolicitudId] = useState(null);
  const [rows, setRows] = useState([]);

 

  const columns = [
    { field: "requestId", headerName: "Nro", width: 90 },
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
 

  const { getData } = useVacationTrackingService();
  // const prueba = async () => {
  //   const response = await getData('my-requests');
  //   console.log(response);
  // }

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
                <DataGrid rows={rows} columns={columns} getRowId={(row) => row.requestId}/>
              </Box>
            </Grid>
          </Grid>
      }

    </MainTemplate>
  );
};
