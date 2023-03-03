import { Box, Grid } from '@mui/material'
import React from 'react'

export const TopSidebar = () => {
    return (
        <Grid container sx={{ bgcolor: "#1E1E1E", p: 2, color: "#ffffff" }}>
            <Grid 
                xs={12} 
                sm={12} 
                md={6} 
                lg={6} xl={6} 
                item 
                display="flex" 
                justifyContent="flex-start" 
                alignItems="center">
                <Box sx={{
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "none",
                        sm: "none",
                        xs: "none"
                    },
                    borderRight:"1px solid #FFFFFF",
                    pr: 1,
                }}>
                    <img src="https://fcdn.ucacue.edu.ec/assets/img/logo-blanco.png" alt="logo de la universidad catolica de cuenca" /> 
                </Box>
            </Grid>
        </Grid>
    )
}
