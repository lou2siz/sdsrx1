// src/components/Article.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const Article = ({ title, content, date }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {date}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
};

export default Article;
