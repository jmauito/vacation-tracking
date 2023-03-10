import React from 'react';
import Grid from '@mui/material/Grid';
import { Topbar } from './Topbar';

export const MainTemplate = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={3} 
        sx={{ 
          height: '100vh', 
          borderRight: 2, 
          borderColor: '#0000001F'
        }}>
        panel izquierdo
      </Grid>
      <Grid item xs={9} sx={{ height: '100vh' }}>
       panel derecho
      </Grid>
    </Grid>
  )
}
