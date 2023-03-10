import { List } from '@mui/material'
import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export const LeftSidebar = () => {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">

      <ListItem button>
        <ListItemText primary="Inicio" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Solicitar Vacaciones" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Estado de Solicitudes" />
      </ListItem>

    </List>
  )
}
