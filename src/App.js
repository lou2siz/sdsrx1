// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Local from './pages/Local';
import LocalArt from './pages/LocalArt';
import LocalPolitics from './pages/LocalPolitics';
import LocalBusiness from './pages/LocalBusiness';
import LocalJustice from './pages/LocalJustice';
import LocalEvents from './pages/LocalEvents';
import { Box } from '@mui/material';
import { ArticleProvider } from './context/ArticleContext';
import ReadingProgress from './components/ReadingProgress';
import ArticleDetail from './pages/ArticleDetail';

const App = () => {
  return (
    <ArticleProvider>
      <Router>
        <ReadingProgress />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: 'black'
          }}
        >
          <NavBar />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Local />} />
              <Route path="/local-art" element={<LocalArt />} />
              <Route path="/local-politics" element={<LocalPolitics />} />
              <Route path="/local-business" element={<LocalBusiness />} />
              <Route path="/local-justice" element={<LocalJustice />} />
              <Route path="/local-events" element={<LocalEvents />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ArticleProvider>
  );
};

export default App;
