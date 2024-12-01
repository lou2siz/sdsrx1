// src/themes/theme.js

import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins'; // Import Poppins font

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color (blue)
    },
    secondary: {
      main: '#ff4081', // Secondary color (pink)
    },
    background: {
      default: '#f5f5f5', // Light gray background
    },
    text: {
      primary: '#212121', // Dark text
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Use Poppins font
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for components
  },
});

export default theme;
