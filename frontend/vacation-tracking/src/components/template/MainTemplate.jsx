import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TopSidebar } from './TopSidebar';
import { VacationRequestList } from '../../vacationRequestList/VacationRequestList';
import { LeftSidebar } from './LeftSidebar';
import { VacationRequestList } from '../VacationRequestList';

const item= styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const MainTemplate = () => {
  return (

    <Grid container spacing={1}>
      <Grid
        item xs={12}>
           <TopSidebar/> 
      </Grid>

      <Grid item xs={3}>
        <LeftSidebar />
      </Grid>
      <Grid item xs={9}>
        <VacationRequestList/>
      </Grid>
    </Grid>

  )
}
