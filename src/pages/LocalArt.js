// src/pages/LocalArt.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ArticleTemplate from '../components/ArticleTemplate';

const LocalArt = () => {
  const articles = [
    {
      title: 'Local Artist Opens New Gallery',
      content:
        'A new art gallery has opened downtown, showcasing the works of local artists...',
      date: '2023-10-01',
    },
    {
      title: 'Art Festival Coming to Town',
      content:
        'The annual art festival will feature sculptures, paintings, and performances...',
      date: '2023-10-05',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logox1.jpg" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Local Art
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

export default LocalArt;
