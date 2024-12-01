// src/themes/theme.js

import { createTheme } from '@mui/material/styles';
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ff0000',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
    text: {
      primary: '#ff0000',
      secondary: '#ff0000',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#FFA500',
      textShadow: '1px 1px 2px #ffffff',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#FFA500',
      textShadow: '1px 1px 2px #ffffff',
    },
    h3: {
      fontWeight: 600,
      color: '#FFA500',
      textShadow: '1px 1px 2px #ffffff',
    },
    h4: {
      fontWeight: 600,
      color: '#FFA500',
      textShadow: '1px 1px 2px #ffffff',
    },
    h5: {
      fontWeight: 500,
      color: '#FFA500',
      textShadow: '1px 1px 2px #ffffff',
    },
    h6: {
      fontWeight: 500,
      color: '#FFA500',
      textShadow: '1px 1px 2px #ffffff',
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.7,
      color: '#ff0000',
      textShadow: '1px 1px 1px #ffffff',
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.7,
      color: '#ff0000',
      textShadow: '1px 1px 1px #ffffff',
    },
    caption: {
      color: '#ff0000',
      textShadow: '1px 1px 1px #ffffff',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
        },
      },
    },
  },
});

export default theme;
