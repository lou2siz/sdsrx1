// src/components/ArticleTemplate.js

import React, { useState } from 'react';
import { 
  Typography, 
  Card, 
  CardContent,
  IconButton,
  Collapse,
  Box,
  Chip
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const getReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const ArticleTemplate = ({ article }) => {
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.content,
        url: window.location.href,
      });
    }
  };

  return (
    <Card sx={{ 
      marginBottom: 4,
      backgroundColor: 'black',
      border: '1px solid red',
      '&:hover': { border: '1px solid orange' }
    }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: 'orange' }}>
          {article.title}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {article.date}
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            color: 'orange',
            ml: 2 
          }}
        >
          {getReadingTime(article.content)}
        </Typography>
        <Collapse in={expanded} collapsedSize={100}>
          <Typography variant="body1">{article.content}</Typography>
        </Collapse>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box>
            <IconButton onClick={() => setLikes(likes + 1)}>
              <ThumbUpIcon sx={{ color: 'red' }} />
            </IconButton>
            <Chip label={likes} size="small" sx={{ bgcolor: 'black', color: 'red' }} />
            
            <IconButton onClick={() => setSaved(!saved)}>
              <BookmarkIcon sx={{ color: saved ? 'orange' : 'red' }} />
            </IconButton>
            
            <IconButton onClick={handleShare}>
              <ShareIcon sx={{ color: 'red' }} />
            </IconButton>
          </Box>
          
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMoreIcon 
              sx={{ 
                color: 'red',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s'
              }} 
            />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArticleTemplate;
