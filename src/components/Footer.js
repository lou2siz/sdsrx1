// src/components/Footer.js

import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'black',
        borderTop: '1px solid red'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'orange', mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'red' }}>
              Your trusted source for local news and community updates.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'orange', mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: 'red' }}>
              Email: contact@localnews.com<br />
              Phone: (555) 123-4567
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'orange', mb: 2 }}>
              Follow Us
            </Typography>
            <Link href="#" sx={{ color: 'red', mr: 2 }}>Twitter</Link>
            <Link href="#" sx={{ color: 'red', mr: 2 }}>Facebook</Link>
            <Link href="#" sx={{ color: 'red' }}>Instagram</Link>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ color: 'red', mt: 3, textAlign: 'center' }}>
          © {new Date().getFullYear()} Local News. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
