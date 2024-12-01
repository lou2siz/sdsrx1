// src/pages/LocalBusiness.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ArticleTemplate from '../components/ArticleTemplate';

const LocalBusiness = () => {
  const articles = [
    {
      title: 'New Coffee Shop Opens Downtown',
      content:
        'A new coffee shop offering organic blends has opened its doors...',
      date: '2023-10-04',
    },
    {
      title: 'Local Startup Raises Funding',
      content:
        'The tech startup has secured significant investment to expand its operations...',
      date: '2023-10-08',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logox1.jpg" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Local Business
      </Typography>
      {articles.map((article, index) => (
        <ArticleTemplate 
          key={index} 
          article={article} 
          index={index}
        />
      ))}
    </Container>
  );
};

export default LocalBusiness;
