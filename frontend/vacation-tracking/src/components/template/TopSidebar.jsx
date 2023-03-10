import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { VacationTracking } from "../../translations/es/VacationTracking";

export const TopSidebar = () => {
  return (
    <Grid
      container
      sx={{ bgcolor: "#1E1E1E", p: 2, color: "#ffffff" }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
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
            alt={VacationTracking.altLogoTopBar}
          />
        </Box>
        <Typography variant="body1" sx={{ pl: 2, fontSize: "20px" }}>
          {VacationTracking.titleName}
        </Typography>
      </Grid>
    </Grid>
  );
};
