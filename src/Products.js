import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AppleIcon from '@mui/icons-material/Apple';
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AppleIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 100 }}>
           Apple
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 200}}>
          Products
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 250}}>
            Pricing
          </Typography>
          <Typography variant="h7" component="div" sx={{ flexGrow: 5000}}>
            Blogs
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5eSuF4_7sC3bdUUjGDbne2OZOLkwCnHOjQ&usqp=CAU"/>
      
    </Box>
  );
}