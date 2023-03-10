import React from 'react';
import { TextField, Grid, Button, Autocomplete, Box, Typography } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

const countryList = [
  {label: 'Ecuador'},
  {label: 'Perú'},
  {label: 'Colombia'},
  {label: 'Venezuela'}
];

const columns = [
  {field: 'id', headerName: 'N.',  width: 150,},
  {field: 'nombre', headerName: 'Nombre', width: 150,},
  {field: 'apellido', headerName: 'Apellido', width: 150,},
  {field: 'edad', headerName: 'Edad', width: 150,},
];

const rows = [
  {id: 1, nombre: 'William', apellido: 'Suárez', edad: 36},
  {id: 2, nombre: 'William', apellido: 'Suárez', edad: 36},
  {id: 3, nombre: 'William', apellido: 'Suárez', edad: 36},
  {id: 5, nombre: 'William', apellido: 'Suárez', edad: 36},
];

export const Example = () => {

  return (
    <>
    <Grid
      mt={2}
      p={2}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
       <Box sx={{width: '500px'}} >
        <Typography variant='h5'>Formulario de datos</Typography>
       </Box>
    </Grid>
    <Grid 
      container 
      spacing={2}
      p={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      >
      <Grid item >
        <TextField label="Nombre" variant="outlined" sx={{width: '500px'}}/>
      </Grid>
      <Grid item >
      <TextField label="Apellido" variant="outlined" sx={{width: '500px'}}/>
      </Grid>
      <Grid item >
        <TextField 
          label="Observaciones"
          multiline
          rows={4}
          sx={{width: '500px'}}
        />
      </Grid>
      <Grid item >
        <Autocomplete 
          options={countryList}
          sx={{ width: '500px' }}
          renderInput={(params) => <TextField {...params} label="Pais" />}
        />
      </Grid>
    </Grid>
     
    <Grid container direction="column" justifyContent="center" alignItems="center" mt={2}>
      <Box sx={{width: '500px'}} >
        <Grid container justifyContent="flex-end" alignItems="flex-end">
          <Button variant='contained'>Grabar datos</Button>
        </Grid>
      </Box>
    </Grid>
     
    <Grid container justifyContent="center" alignItems="center" mt={2}> 
        <Box sx={{ height: 400, width: '700px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          >
          </DataGrid>
        </Box>

    </Grid>
    </>
  )
}
