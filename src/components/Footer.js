// src/components/Footer.js

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: '#fff',
        padding: 2,
        marginTop: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Site Name. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="#" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
