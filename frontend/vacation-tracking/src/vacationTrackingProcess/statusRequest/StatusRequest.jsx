import React, {useState, useEffect} from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { MainTemplate } from "../../components/template/MainTemplate";
import { RequestDetails } from "../requestDetails/RequestDetails";

const rows = [
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

  const  [showDetail, setShowDetail] = useState(false);
  const [solicitudId, setSolicitudId] = useState(null)


  const columns = [
    { field: "id", headerName: "Nro", width: 90 },
    {
      field: "Tipo",
      headerName: "Tipo",
      width: 200,
      editable: true,
    },
    {
      field: "Inicia",
      headerName: "Inicia",
      width: 150,
      editable: true,
    },
    {
      field: "Termina",
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
      field: "Estado",
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
            <Button variant="contained" color="primary" onClick={()=> {onDetail(params)}}>
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
  }, [])
  

  return (
    <MainTemplate>
      {
        showDetail 
        ? <RequestDetails setShowDetail={setShowDetail} solicitudId={solicitudId}/>
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
