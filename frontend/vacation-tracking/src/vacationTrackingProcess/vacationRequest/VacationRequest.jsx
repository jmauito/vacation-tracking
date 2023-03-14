import { Grid } from '@mui/material'
import React from 'react'
import { TextField, Autocomplete } from '@mui/material';
import Button from '@mui/material/Button';
import { MainTemplate } from '../../components/template/MainTemplate';
import useVacationTrackingService from '../../hooks/useVacationTrackingService';

const countryList = [
    { label: 'Tomar el tiempo de vacaciones' },
    { label: 'Solicitar licencia con cargo a vacaciones' },
];



export const VacationRequest = () => {

    const {getData} = useVacationTrackingService();
    const prueba = async() =>{
        const response = await getData('health/check');
        console.log(response);
    }


    return (
        <MainTemplate>
            <Grid container direction="column" spacing={2} m={4}>
                <Grid item>
                    <h1>Solicitud De Vacaciones</h1>
                </Grid>
                <Grid item>
                    <Autocomplete
                        options={countryList}
                        sx={{ width: '410px', height: '70px' }}
                        renderInput={(params) => <TextField {...params} label="Tipo de solicitud" />}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Comentarios"
                        multiline
                        rows={4}
                        sx={{ width: '600px', height: '150px' }}
                    />
                </Grid>

                <Grid item container>
                    <Grid
                        item xs={4}>
                        <p align="left">
                            <h2> Fecha de inicio </h2>
                            <input type="datetime-local" name="datetime" id="datetime"></input>
                        </p>
                    </Grid>

                    <Grid
                        item xs={5}>
                        <p align="Rigth">
                            <h3> Fecha de final </h3>
                            <input type="datetime-local" name="datetime" id="datetime"></input>
                        </p>

                    </Grid>
                </Grid>
                <Grid
                    item
                >

                        <Button variant="contained" onClick={prueba}> Registrar el elemento </Button>

                    </Grid>
            </Grid>
        </MainTemplate>
    )
}
