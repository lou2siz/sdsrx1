// src/pages/LocalPolitics.js

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ArticleTemplate from '../components/ArticleTemplate';

const LocalPolitics = () => {
  const articles = [
    {
      title: 'City Council Passes New Ordinance',
      content:
        'The city council voted unanimously to pass a new ordinance aimed at...',
      date: '2023-10-02',
    },
    {
      title: 'Mayoral Debate Highlights',
      content:
        'The mayoral candidates faced off in a heated debate last night, discussing...',
      date: '2023-10-06',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logox1.jpg" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Local Politics
      </Typography>
      {articles.map((article, index) => (
        <ArticleTemplate key={index} article={article} index={index} />
      ))}
    </Container>
  );
};

export default LocalPolitics;
