// src/pages/LocalJustice.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ArticleTemplate from '../components/ArticleTemplate';

const LocalJustice = () => {
  const articles = [
    {
      title: 'Community Rally for Social Justice',
      content:
        'Hundreds gathered at the town square to advocate for social change...',
      date: '2023-10-09',
    },
    {
      title: 'Local Court Cases to Watch',
      content:
        'Several high-profile cases are scheduled for hearing this month...',
      date: '2023-10-10',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logox1.jpg" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Local Justice
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

export default LocalJustice;
