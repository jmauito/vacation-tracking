import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../contextManager/UserContext';

export const LeftSidebar = () => {

  const {statusLogin} = useContext(UserContext);
  const {role} = statusLogin;
  
  const redirectOptiosMenu = () => {
    if(role.name === 'ROLE_USER'){
      return (
        <>
        <Link to="/solicitud-vacaciones" style={{all: 'unset'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Solicitar vacaciones</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/estado-solicitudes-vacaciones" style={{all: 'unset'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Estado de las solicitudes</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </>
      )
    }else if(role.name === 'ROLE_ADMIN'){
      return (
        <>
           <Divider />
            <Link to="/revision-solicitudes-vacaciones" style={{all: 'unset'}}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>Revisón de solicitudes</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
        </>
      )
    }
  }


  return (
    <List>
      {
        redirectOptiosMenu()
      }
      <Divider />
    </List>
  );
};