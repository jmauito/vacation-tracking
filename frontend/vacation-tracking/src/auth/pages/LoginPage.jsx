import React from 'react';
import {Alert, Button, Grid, TextField, Typography} from '@mui/material';
import useAuthentificationManager from '../../hooks/useAuthentificationManager';
import { UserContext } from '../../components/contextManager/UserContext';
import { useContext } from 'react';

export const LoginPage = () => {

  const {validateCredentials} = useAuthentificationManager();
  const {statusLogin} = useContext(UserContext);

  const onSubmitLogin = (e) =>{
    e.preventDefault();
    const {correo, password} = e.target;
    validateCredentials(correo.value, password.value);
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: '#e3f2fd', padding: 4 }}
    >
      <Grid
        item
        xs={3}
        sx={{ 
            width: { sm: 450 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2,
            boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)"
        }}
      >
        <Typography variant="h4" sx={{mb: 1}} >Login</Typography>
        <form onSubmit={onSubmitLogin}>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
             {
              statusLogin.errorMessage && <Alert severity="error">
                                            Credenciales incorrectas
                                          </Alert>
             }
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Correo"
                id="correo"
                type="email"
                placeholder="example@domain.com"
                fullWidth
                error={statusLogin.errorMessage}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Contraseña"
                id="password"
                type="password"
                placeholder="Contraseña"
                fullWidth
                error={statusLogin.errorMessage}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <Button variant="contained" fullWidth type="submit">Login</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
