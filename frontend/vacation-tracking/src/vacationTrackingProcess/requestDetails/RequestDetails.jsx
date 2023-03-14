import React, {useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

export const RequestDetails = ({setShowDetail, solicitudId}) => {

    const onReturn = () => {
        setShowDetail(false);
    }

    useEffect(() => {
      console.log(solicitudId)
    }, [])
    

    return (
        <Box>
            <Grid>
                <Typography variant="h4" fontSize={30} m={2} textAlign={"center"}>
                    Detalles de la Solicitud
                </Typography>
                <Typography variant="h4" fontSize={20} m={2}>
                    Estado: 
                </Typography>
                <Typography variant="h4" fontSize={20} m={2}>
                    Tipo:
                </Typography>
                <Typography variant="h4" fontSize={20} m={2}>
                    Inicio:
                </Typography>
                <Typography variant="h4" fontSize={20} m={2}>
                    Comentario:
                </Typography>
                <Typography variant="h4" fontSize={30} textAlign={"center"}>
                    Detalles de la Validación
                </Typography>
                <Typography variant="h4" fontSize={15} m={2}>
                    *No cumple con el tiempo minimo entre solicitudes de vacaciones
                </Typography>
                <Typography variant="h4" fontSize={15} m={2}>
                    *Restricción: Su cargo necesita dejar algún reemplazo,no se encontro reemplazo disponible
                </Typography>
                <Typography variant="h4" fontSize={15} m={2}>
                    *Restricción: Su cargo no puede solicitar vacaiones para los dias Jueves
                </Typography>
            </Grid>
            <Grid container m={12} spacing={1} textAlign="center">
                <ThemeProvider theme={theme}>
                    <Button color="neutral" variant="contained" onClick={onReturn} >
                        Retomar 
                    </Button>
                </ThemeProvider>
            </Grid>
        </Box>
    )
}
