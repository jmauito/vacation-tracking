import {
  Box,
  Button,
  Grid,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { UserContext } from "../contextManager/UserContext";


export const TopSidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const {statusLogin, setStatusLogin} = useContext(UserContext)
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutSession = () => {
    setStatusLogin({
        email: null, 
        status: "no-authenticated",
        displayName: null,
        errorMessage: null,
        token:null,
        role:null,
    })
  };

  return (
    <Grid container sx={{ bgcolor: "#1E1E1E", p: 2, color: "#ffffff" }}>
      <Grid
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        item
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box
          sx={{
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
            borderRight: "1px solid #FFFFFF",
            pr: 1,
          }}
        >
          <img
            src="https://fcdn.ucacue.edu.ec/assets/img/logo-blanco.png"
            alt="logo de la universidad catolica de cuenca"
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          pr: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            pl: 2,
            fontFamily: "Plus Jakarta Sans",
            fontSize: "16",
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: "#ffffff",
              textTransform: "none",
            }}
            endIcon={<ArrowDropDownIcon />}
          >
            <span>
              {statusLogin.displayName}
              {<br />}
              {statusLogin.role.name}
            </span>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                logoutSession();
              }}
            >
              <ListItemText>Cerrar Session</ListItemText>
              <ListItemIcon
                sx={{
                  ml: 1,
                }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </Typography>
      </Grid>
    </Grid>
  );
};
