// src/components/NavBar.js

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Art', path: '/local-art' },
    { text: 'Politics', path: '/local-politics' },
    { text: 'Business', path: '/local-business' },
    { text: 'Justice', path: '/local-justice' },
    { text: 'Events', path: '/local-events' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.text} 
          onClick={() => {
            navigate(item.path);
            handleDrawerToggle();
          }}
        >
          <ListItemText 
            primary={item.text} 
            sx={{ 
              color: 'blue',
              '& .MuiTypography-root': { color: 'blue' }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'black', borderBottom: '1px solid blue' }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: 'blue' }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Typography 
          variant="h6" 
          component={Link} 
          to="/"
          sx={{ 
            flexGrow: 1,
            color: 'yellow',
            textDecoration: 'none',
            fontFamily: 'Space Grotesk',
            fontWeight: 700
          }}
        >
          San Francisco Freedom Times
        </Typography>

        {!isMobile && (
          <Box>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{ 
                  color: 'blue',
                  '&:hover': { color: 'yellow' }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            bgcolor: 'black',
            borderRight: '1px solid lightblue'
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
