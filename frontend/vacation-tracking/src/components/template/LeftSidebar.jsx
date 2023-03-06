import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '150%',
    maxWidth: 500,
    bgcolor: 'darkgrey',
   
    
  };

export const LeftSidebar = () => {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
        <ListItemText primary="Gestor de vacaciones" />
        </ListItem>
        <Divider/>
        <ListItem button divider>
            <ListItemText primary="Inicio"/>
        </ListItem>
        <ListItem button>
            <ListItemText primary="Solicitar vacaciones"/>
        </ListItem>
        <Divider light/>
        <ListItem button>
            <ListItemText primary="Estado de las solicitudes"/>
        </ListItem>
    </List>
  );
}
