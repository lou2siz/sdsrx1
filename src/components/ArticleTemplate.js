// src/components/ArticleTemplate.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Typography, 
  Card, 
  CardContent,
  IconButton,
  Collapse,
  Stack,
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

const ArticleTemplate = ({ article, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(0);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.content,
        url: window.location.href,
      });
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setLikes(likes + 1);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    setSaved(!saved);
  };

  const handleExpand = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Card 
      sx={{ 
        marginBottom: 4,
        backgroundColor: 'black',
        border: '1px solid lightblue',
        '&:hover': { 
          border: '1px solid gold',
          cursor: 'pointer'
        }
      }}
      onClick={() => navigate(`/article/${index}`)}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: 'gold' }}>
          {article.title}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {article.date}
        </Typography>
        <Typography 
          variant="caption" 
          sx={{ 
            color: 'gold',
            ml: 2 
          }}
        >
          {getReadingTime(article.content)}
        </Typography>
        <Collapse in={expanded} collapsedSize={100}>
          <Typography variant="body1">{article.content}</Typography>
        </Collapse>
        
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Stack direction="row" alignItems="center">
            <IconButton onClick={handleLike}>
              <ThumbUpIcon sx={{ color: 'lightblue' }} />
            </IconButton>
            <Chip label={likes} size="small" sx={{ bgcolor: 'black', color: 'lightblue' }} />
            
            <IconButton onClick={handleSave}>
              <BookmarkIcon sx={{ color: saved ? 'gold' : 'lightblue' }} />
            </IconButton>
            
            <IconButton onClick={handleShare}>
              <ShareIcon sx={{ color: 'lightblue' }} />
            </IconButton>
          </Stack>
          
          <IconButton onClick={handleExpand}>
            <ExpandMoreIcon 
              sx={{ 
                color: 'lightblue',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: '0.3s'
              }} 
            />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ArticleTemplate;
