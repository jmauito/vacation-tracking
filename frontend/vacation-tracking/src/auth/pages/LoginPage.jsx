import React, { useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';

export const LoginPage = () => {
    const onclickLogin = () => {
        alert("Correo:" + correo);
        alert("Contraseña:"+contrasenia)
       
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
