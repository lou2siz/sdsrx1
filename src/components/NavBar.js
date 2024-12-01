// src/components/NavBar.js

import React from 'react';
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
import { Link } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const menuItems = [
    { text: 'Local', link: '/' },
    { text: 'Local Art', link: '/local-art' },
    { text: 'Local Politics', link: '/local-politics' },
    { text: 'Local Business', link: '/local-business' },
    { text: 'Local Justice', link: '/local-justice' },
    { text: 'Local Events', link: '/local-events' },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" elevation={2} color="primary">
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1,
          }}
        >
          <Box
            component="img"
            src="/logox1.jpg"
            alt="Logo"
            sx={{ height: 50, marginRight: 2 }}
          />
          <Typography variant="h6" noWrap>
            Your Site Name
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {menuItems.map((item) => (
                    <ListItem
                      button
                      key={item.text}
                      component={Link}
                      to={item.link}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={Link}
              to={item.link}
              sx={{ marginLeft: 1 }}
            >
              {item.text}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
