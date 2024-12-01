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
        borderTop: '1px solid lightblue'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'orange', mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'lightblue' }}>
              San Francisco Freedom Times: Your trusted source for local news and community updates.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'orange', mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: 'lightblue' }}>
              Email: contact@sanfranciscofreedomtimes.com<br />
              Phone: (858) 888-1068
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'gold', mb: 2 }}>
              Follow Us
            </Typography>
            <Link href="https://twitter.com/SFFreedomTimes" target="_blank" sx={{ color: 'lightblue', mr: 2 }}>Twitter</Link>
            <Link href="https://facebook.com/SFFreedomTimes" target="_blank" sx={{ color: 'lightblue', mr: 2 }}>Facebook</Link>
            <Link href="https://instagram.com/SFFreedomTimes" target="_blank" sx={{ color: 'lightblue' }}>Instagram</Link>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ color: 'lightblue', mt: 3, textAlign: 'center' }}>
          © {new Date().getFullYear()} San Francisco Freedom Times. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
