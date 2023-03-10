import { Divider, List, ListItem } from '@mui/material'
import React from 'react'

export const LeftSidebar = () => {
  return (
    <div>
        <List>
            <ListItem button>Inicio </ListItem>
            <Divider></Divider>
            <ListItem button>Solicitar vacaciones</ListItem>
            <Divider></Divider>
            <ListItem button>Estado de las solicitudes</ListItem>
            <Divider></Divider>
        </List>
    
    </div>
  )
}
