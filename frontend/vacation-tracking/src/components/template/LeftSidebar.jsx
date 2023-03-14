import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const LeftSidebar = () => {
  return (
    <List>
      <Link to="/" style={{all: 'unset'}}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>Inicio</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Divider />
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
      <Divider />
      <Link to="/revision-solicitudes-vacaciones" style={{all: 'unset'}}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>Revisón de solicitudes</ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Divider />
    </List>
  );
};