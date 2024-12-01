import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Button,
  Paper
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useArticles } from '../context/ArticleContext';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allArticles } = useArticles();
  
  const article = allArticles.find((article, index) => index.toString() === id);

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4">Article not found</Typography>
        <Button 
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mt: 2, color: 'lightblue' }}
        >
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button 
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 2, color: 'lightblue' }}
      >
        Go Back
      </Button>
      
      <Paper sx={{ 
        p: 3, 
        bgcolor: 'black',
        border: '1px solid lightblue',
        borderRadius: 2
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'gold' }}>
          {article.title}
        </Typography>
        
        <Typography variant="caption" display="block" gutterBottom sx={{ mb: 3 }}>
          {article.date}
        </Typography>
        
        <Typography variant="body1" paragraph>
          {article.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ArticleDetail; 