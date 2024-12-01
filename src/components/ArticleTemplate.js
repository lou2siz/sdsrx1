// src/components/ArticleTemplate.js

import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

const ArticleTemplate = ({ article }) => {
  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {article.date}
        </Typography>
        <Typography variant="body1">{article.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleTemplate;
