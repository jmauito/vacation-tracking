import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useVacationTrackingService from '../../hooks/useVacationTrackingService';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

export const RequestDetails = ({ setShowDetail, solicitudId }) => {
    const {getData}= useVacationTrackingService()
    const [status, setStatus] = useState(null)
    const [requestTypeName, setRequestTypeName ]=useState(null)
    const [startDate, setStartDate]=useState(null)
    const [comment, setComment]=useState(null)

    const onReturn = () => {
        setShowDetail(false);
    }

    useEffect(() => {
        console.log(solicitudId)
        const prueba = async () => {
            const response = await getData('my-requests/'+solicitudId);
            console.log(response);
            setStatus (response.status)
            setRequestTypeName (response.requestTypeName)
            setStartDate (response.startDate)
            setComment (response.comment)

        }

        prueba();
    }, [])


    return (
        <Box>
            <Grid>
                <Typography variant="h4" fontSize={30} m={2} textAlign={"center"}>
                    Detalles de la Solicitud
                </Typography>
                <Typography variant="h4" fontSize={20} m={2}>
                    Estado:{status}
                </Typography>
                <Typography variant="h4" fontSize={20} m={2}>
                    Tipo: {requestTypeName}
                </Typography>
                <Typography variant="h4" fontSize={20} m={2}>
                    Inicio:{startDate}
                </Typography>
                <Typography variant="h4" fontSize={20} m={2}>
                    Comentario:{comment}
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
