import React from 'react'
import { Box, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'Nro', width: 90 },
  {
    field: 'Nombres',
    headerName: 'Nombres y Apellidos',
    width: 150,
    editable: true,
  },
  {
    field: 'Tipo',
    headerName: 'Tipo',
    width: 250,
    editable: true,
  },
  {
    field: 'Inicia',
    headerName: 'Inicia',
    width: 150,
    editable: true,
  },
  {
    field: 'Termina',
    headerName: 'Termina',
    width: 150,
    editable: true,
  },
  {
    field: 'Accion',
    headerName: 'Accion',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, Nombres: 'Snow', Tipo: 'Tiempo de vacaciones', Inicia: '01-Ene-2023', Termina:'15-Ene-2023', Accion:'Validar'},
  { id: 2, Nombres: 'Lannister', Tipo: 'Licencia', Inicia: '01-Ene-2023', Termina:'15-Ene-2023', Accion:'Validar'},
  { id: 3, Nombres: 'Lannister', Tipo: 'Tiempo de vacaciones', Inicia: '30-Ene-2023', Termina:'15-Feb-2023', Accion:'Validar'},
  { id: 4, Nombres: 'Stark', Tipo: 'Licencia', Inicia: '20-Feb-2023', Termina: '01-Mar-2023', Accion:'Validar'},
  
];

export const VacationRequestList = () => {
  return (
    <div>
      <h1>Lista de solicitudes de vacaciones</h1>
      <Box sx={{ height:315 , width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </Box>

      <Grid container spacing={0} > 
      <Button variant="contained">Registar el elemento </Button>
      </Grid>  


    </div>
  )
}
