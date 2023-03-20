import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TextField, Autocomplete } from '@mui/material';
import Button from '@mui/material/Button';
import { MainTemplate } from '../../components/template/MainTemplate';
import useVacationTrackingService from '../../hooks/useVacationTrackingService';

export const VacationRequest = () => {

    const { getData } = useVacationTrackingService(); 
    const [requestTypeList, setRequestTypeList] = useState([]);
    const [Comment, setComment] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const[finishDate,setFinishDate] = useState(null);
    const [requestTypeId, setRequestTypeId] = useState(null)

    const onClickSave = async() =>{
        alert ("Enviado")
    }

    useEffect(() => {
        async function resultado() {
            const response = await getData('requests-types');
            setRequestTypeList(response);
            setComment(response.Comment);
            setFinishDate(response.finishDate);
            setStartDate(response.startDate);
            
            }
        resultado();
    }, [])

    return (
        <MainTemplate>
            <Grid container direction="column" spacing={2} m={4}>
                <Grid item>
                    <h1>Solicitud De Vacaciones</h1>
                </Grid>
                <Grid item>
                    <Autocomplete
                        options={requestTypeList}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: '410px', height: '70px' }}
                        renderInput={(params) => <TextField {...params} label="Tipo de solicitud" />}
                        onChange={(e, selectedItem)=> {setRequestTypeId(selectedItem.id)}}      
                        // value={requestTypeList}  
                    />
                </Grid>
                <Grid item>
                    <TextField
                        onChange={(e)=> {setComment(e.target.value)}}    
                        value={Comment}                     
                        label="Comentarios"
                        multiline
                        rows={4}
                        sx={{ width: '600px', height: '150px' }}
                    />
                </Grid>

                <Grid item container>
                    <Grid item xs={4}>
                        <p align="left">
                            <h2> Fecha de inicio </h2>
                            <input type="datetime-local" name="datetime" id="datetime"
                            onChange={(e)=> {setStartDate(e.target.value)}}      
                            value={startDate} 
                            ></input>
                                 
                        </p>
                    </Grid>

                    <Grid
                        item xs={5}>
                        <p align="Rigth">
                            <h3> Fecha de final </h3>
                            <input type="datetime-local" name="datetime" id="datetime"
                            onChange={(e)=> {setFinishDate(e.target.value)}}        
                            value={finishDate}  
                            ></input>  
                        </p>

                    </Grid>
                </Grid>
                <Grid
                    item
                >
                    <Button variant="contained" onClick={onClickSave}> 
                    Registrar el elemento
                     </Button>
                </Grid>
            </Grid>
        </MainTemplate>
    )
}
