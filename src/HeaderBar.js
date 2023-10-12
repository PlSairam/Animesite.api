import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
export default function HeaderBar() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.01}}>
         <a href="https://aniwatch.to/"> <img width="100" src="https://aniwatch.to/images/logo.png" alt="logo" /></a>
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 0.02 }}>
             <a href="https://aniwatch.to/home"> Home</a>
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: 0.02 }}>
             <a href="https://aniwatch.to/movie"> Movies</a>
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: 0.02}}>
              <a href="https://aniwatch.to/top-airing">  Top Airing</a>
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: 1}}>
          
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
       
    </Box>
  );
}
