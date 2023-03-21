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

  const {statusLogin, setShowRequest} = useContext(UserContext);
  const {role} = statusLogin;

  return (
    <List>
     {(role.name === 'ROLE_USER' || role.name === 'ROLE_ADMIN')
      && (
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
      )}
    {(role.name === 'ROLE_ADMIN')
      && (
        <>
           <Divider />
            <Link to="/revision-solicitudes-vacaciones" style={{all: 'unset'}}>
              <ListItem disablePadding>
                <ListItemButton onClick={() =>{setShowRequest(false)}}>
                  <ListItemText>Revisón de solicitudes</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
        </>
      )
    }
      <Divider />
    </List>
  );
};