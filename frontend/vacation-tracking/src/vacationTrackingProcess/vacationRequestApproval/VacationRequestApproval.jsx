import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import useVacationTrackingService from "../../hooks/useVacationTrackingService";


export const VacationRequesApproval = ({requestId}) => {
    const {getData, postData} = useVacationTrackingService()
    const [comment, setComment] = useState(null)
    const [employeeName, setEmployeeName] = useState(null)
    const [finishDate, setFinishDate] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [requestTypeName, setRequestTypeName] = useState(null)
    const [observacion, setObservacion] = useState(null)
    const [id, setId] = useState(null)

    const onclickApprove = async() => {
        alert(111)
    
        const response = await postData('request-inbox/'+id+'/approve',{
            "observation":observacion 
        });

        if (response){
            alert("solicitud aprovada correctamente")
        }
    }
    const onclickDenny = async() => {
        alert (112)

        const response = await postData('request-inbox/'+id+'/reject',{
            "observation":observacion
        });

        if (response){
            alert("solicitud rechazada")
        }
    }

 useEffect(() => {
    const getDataRequest = async() => {
        const response = await getData('request-inbox/'+requestId);
        console.log(response)
        setComment (response.comment)
        setEmployeeName (response.employeeName)
        setFinishDate (response.finishDate)
        setStartDate (response.startDate)
        setRequestTypeName (response.requestTypeName)
        setId(response.id)
        

      }

         getDataRequest();

 }, [])
 


    return (
        <Grid container direction="column" spacing={2} m={4}>
             <Grid item>
            <Typography variant="h5" textAlign={'center'} fontSize={35}>
                Lista de Solicitudes de Vacaciones
            </Typography>
        </Grid>    
        <Grid item>
            <Typography variant="h6">
                Nombre: {employeeName}
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" gutterBottom>
                Tipo:     {requestTypeName}
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" gutterBottom>
                Inicia:      {startDate}
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" gutterBottom>
                Termina:    {finishDate}
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6" gutterBottom>
                Comentarios:  {comment}
            </Typography>
        </Grid>
        <Grid item>
                <Stack direction="row" xs={4} spacing={10}>
                    <Button variant="contained" color='success'>
                        Validar restricciones
                    </Button>
                </Stack>
        </Grid>
            
        <Grid item>
            <TextField
                id="standard-multiline-flexible"
                label="Observaciones"
                onChange={(e) => {setObservacion(e.target.value)}}
                multiline
                maxRows={4}
                variant="standard"
                rows={2}
                sx={{ width: '500px', height: '50px' }}
            />
        </Grid>
            <Grid item container m={12} spacing={1}>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="success" onClick={onclickApprove}>
                        Aprobar Solicitud

                    </Button>
                    <Button variant="contained" color="error" onClick={onclickDenny}>
                        Rechazar Solicitud
                    </Button>
                </Stack>
            </Grid>
        
        </Grid>
       
    )
}
