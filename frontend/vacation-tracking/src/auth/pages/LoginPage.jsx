import React, { useState } from 'react'
import { Alert, Grid, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import  useAuthentificationManager  from '../../hooks/useAuthentificationManager';
import { useContext } from 'react';
import { UserContext } from '../../components/contextManager/UserContext';

export const LoginPage = () => {

    const{validateCredentials} = useAuthentificationManager();
    const{statusLogin} = useContext (UserContext);

    const onclickLogin = () => {
     //   alert("Correo:" + correo);
     //   alert("Contraseña:"+contrasenia)

      validateCredentials(correo,contrasenia);
      console.log(statusLogin)   
    }

    const [correo, setCorreo] = useState("");
    // const [contrasenia, setContrasenia] = useState("")

    const [contrasenia, setContrasenia] = useState("")
    
    
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh", backgroundColor: "#e3f2fd", padding: 4 }}
        >
            <Grid
                item
                xs={3}
                sx={{
                    width: { sm: 450 },
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 2
                }}
            >
                <Typography variant='h4'>
                    Login
                </Typography>
                <form>
                    <Grid
                        container
                    >
                     <Grid item xs={12} sx={{mt: 2}}>
                        {
                        statusLogin.errorMessage && <Alert severity="error">
                                                        Credenciales incorrectas
                                                    </Alert>
                        }
                    </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={2}
                        >
                            <TextField
                                fullWidth
                                label="Correo"
                                onChange={(e) => {setCorreo(e.target.value)}}
                                value={correo}
                            >
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={2}
                        >
                            <TextField
                                type="password"
                                fullWidth
                                label="Contraseña"
                                onChange={(e)=> {setContrasenia(e.target.value)}}
                                value={contrasenia}
                            >
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            mt={2}
                            >
                                    <Button variant="contained" fullWidth 
                                        onClick={onclickLogin}
                                    >
                                            LOGIN
                                    </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}
