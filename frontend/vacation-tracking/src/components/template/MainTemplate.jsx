import React from 'react';
import Grid from '@mui/material/Grid';
import { TopSidebar } from './TopSidebar';
import { LeftSidebar } from './LeftSidebar';

export const MainTemplate = ({children}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TopSidebar />
      </Grid>
      <Grid item xs={3} 
        sx={{ 
          height: '100vh', 
          borderRight: 2, 
          borderColor: '#0000001F'
        }}>
        <LeftSidebar />
      </Grid>
      <Grid item xs={9} sx={{ height: '100vh' }}>
       {children}
      </Grid>
    </Grid>
  )
}