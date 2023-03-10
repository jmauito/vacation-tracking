import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const VacationRequestList = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h5" textAlign={'center'} fontSize={35}>
                Lista de Solicitudes de Vacaciones
            </Typography>
            <Typography variant="h6">
                Nombre: Erika Salomé Astudillo
            </Typography>
            <Typography variant="h6" gutterBottom>
                Tipo:      Licencia
            </Typography>
            <Typography variant="h6" gutterBottom>
                Inicia:      15 de agosto
            </Typography>
            <Typography variant="h6" gutterBottom>
                Termina:    01 de septiembre
            </Typography>
            <Typography variant="h6" gutterBottom>
                Comentarios:      viaje familiar
            </Typography>
            <Grid>
                <Stack direction="row" xs={4} spacing={10}>
                    <Button variant="contained" color='success'>
                        Validar restricciones
                    </Button>
                </Stack>
            </Grid>
            <Grid>
                <TextField
                    id="standard-multiline-flexible"
                    label="Observaciones"
                    multiline
                    maxRows={4}
                    variant="standard"
                    rows={2}
                    sx={{ width: '500px', height: '50px' }}
                />
            </Grid>
            <Grid container m={12} spacing={1}>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="success">
                        Aprobar Solicitud
                    </Button>
                    <Button variant="contained" color="error">
                        Rechazar Solicitud
                    </Button>
                </Stack>
            </Grid>
        </Box >
    )
}
