import React, {useState,useEffect} from "react";
import { Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { MainTemplate } from "../../components/template/MainTemplate";
import { VacationRequesApproval } from "../vacationRequestApproval/VacationRequestApproval";
import useVacationTrackingService from "../../hooks/useVacationTrackingService";

let rows2 = [
  {
    id: 1,
    Nombres: "Snow",
    Tipo: "Tiempo de vacaciones",
    Inicia: "01-Ene-2023",
    Termina: "15-Ene-2023",
    Accion: "Validar",
  },
  {
    id: 2,
    Nombres: "Lannister",
    Tipo: "Licencia",
    Inicia: "01-Ene-2023",
    Termina: "15-Ene-2023",
    Accion: "Validar",
  },
  {
    id: 3,
    Nombres: "Lannister",
    Tipo: "Tiempo de vacaciones",
    Inicia: "30-Ene-2023",
    Termina: "15-Feb-2023",
    Accion: "Validar",
  },
  {
    id: 4,
    Nombres: "Stark",
    Tipo: "Licencia",
    Inicia: "20-Feb-2023",
    Termina: "01-Mar-2023",
    Accion: "Validar",
  },
];

export const VacationRequestList = () => {

  const [showSolicitud, setshowSolicitud] = useState(false);
  const {getData} = useVacationTrackingService()
  const [rows, setRows] = useState({})

  const columns = [
  { field: "id", headerName: "Nro", width: 90 },
  {
    field: "employeeName",
    headerName: "Nombres y Apellidos",
    width: 150,
    editable: true,
  },
  {
    field: "requestTypeId",
    headerName: "Tipo",
    width: 250,
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
    field: "Accion",
    headerName: "Accion",
    width:310,
    editable: true,
    renderCell: (params) => {
        return (
          <div>
            <Button variant="contained" color="primary" onClick={()=> {onValidate(params)}}>
              Detalles
            </Button>
          </div>
        );
    },
  },
];

  const onValidate = () => {
    alert('validate');
    setshowSolicitud(true);
  }

  useEffect(() => {
    setshowSolicitud(false);
    const getDataRequest = async() => {
      const response = await getData('request-inbox');
      console.log(response)
      setRows(response);
    }
  
    getDataRequest();

  }, [])
  

  return (
    <MainTemplate>
      {
        showSolicitud
        ? <VacationRequesApproval />
        :
        <Grid container direction="column" spacing={2} m={4}>
        <Grid item>
          <h1>Lista de solicitudes de vacaciones</h1>
        </Grid>
        <Grid item>
          <Box sx={{ height: 315, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
          </Box>
        </Grid>
        <Grid item container spacing={0}>
          <Button variant="contained">Registar el elemento </Button>
        </Grid>
      </Grid>
      }
     
    </MainTemplate>
  );
};
