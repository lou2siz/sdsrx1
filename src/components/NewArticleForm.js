// src/components/NewArticleForm.js

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
} from '@mui/material';

const NewArticleForm = ({ onSubmit }) => {
  const [article, setArticle] = useState({
    title: '',
    content: '',
    date: '',
  });

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(article);
    setArticle({ title: '', content: '', date: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add New Article
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          fullWidth
          value={article.title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          fullWidth
          value={article.date}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          name="content"
          label="Content"
          fullWidth
          multiline
          rows={4}
          value={article.content}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default NewArticleForm;
