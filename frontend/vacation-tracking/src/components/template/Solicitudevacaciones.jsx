import { Grid } from '@mui/material'
import React from 'react'
import { TextField, Autocomplete } from '@mui/material';
import Button from '@mui/material/Button';

const countryList = [
    { label: 'Tomar el tiempo de vacaciones' },
    { label: 'Solicitar licencia con cargo a vacaciones' },
];

export const Solicitudevacaciones = () => {
    return (

        <Grid item xs={9}>
            <h1>Solicitud De Vacaciones</h1>
            <Grid>
                <Autocomplete
                    options={countryList}
                    sx={{ width: '410px', height: '70px' }}
                    renderInput={(params) => <TextField {...params} label="Tipo de solicitud" />}
                />
                <Grid>
                    <TextField
                        label="Comentarios"
                        multiline
                        rows={4}
                        sx={{ width: '600px', height: '150px' }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
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

                <Grid
                    fullwidth
                    item xs={4}>
                    <Button variant="contained"> Registrar el elemento </Button>

                </Grid>
            </Grid>
        </Grid>
    )
}
