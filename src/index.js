// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
