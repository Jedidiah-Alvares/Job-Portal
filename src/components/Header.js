import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Header = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
       
      <AppBar>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Portal
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Toolbar />
    </>
  )
}
