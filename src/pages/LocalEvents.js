// src/pages/LocalEvents.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ArticleTemplate from '../components/ArticleTemplate';

const LocalEvents = () => {
  const articles = [
    {
      title: 'Fall Festival This Weekend',
      content:
        'Join us for a weekend of fun, food, and festivities at the annual Fall Festival...',
      date: '2023-10-11',
    },
    {
      title: 'Concert Series Announced',
      content:
        'The summer concert series lineup has been announced, featuring local and national artists...',
      date: '2023-10-12',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logox1.jpg" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Local Events
      </Typography>
      {articles.map((article, index) => (
        <ArticleTemplate key={index} article={article} />
      ))}
    </Container>
  );
};

export default LocalEvents;
