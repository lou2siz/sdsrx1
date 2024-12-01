// src/pages/Local.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ArticleTemplate from '../components/ArticleTemplate';

const Local = () => {
  const articles = [
    {
      title: 'Community Garden Flourishes',
      content:
        'The new community garden has become a hub for local residents...',
      date: '2023-10-03',
    },
    {
      title: 'Local School Wins Award',
      content:
        'Congratulations to the students and staff for their outstanding achievements...',
      date: '2023-10-07',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logox1.jpg" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Local News
      </Typography>
      {articles.map((article, index) => (
        <ArticleTemplate key={index} article={article} />
      ))}
    </Container>
  );
};

export default Local;
