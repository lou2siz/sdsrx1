import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemIcon
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useNavigate } from 'react-router-dom';
import { useArticles } from '../context/ArticleContext';

const PopularTopics = () => {
  const navigate = useNavigate();
  const { allArticles } = useArticles();
  
  const topics = [
    { title: 'City Development', views: '2.5K', index: 0 },
    { title: 'Local Sports', views: '2.1K', index: 1 },
    { title: 'Education', views: '1.8K', index: 2 },
    { title: 'Community Events', views: '1.5K', index: 3 },
  ];

  const handleTopicClick = (index) => {
    // Find the corresponding article in allArticles
    const article = allArticles.find(article => 
      article.title.toLowerCase().includes(topics[index].title.toLowerCase())
    );
    
    if (article) {
      const articleIndex = allArticles.indexOf(article);
      navigate(`/article/${articleIndex}`);
    }
  };

  return (
    <Card sx={{ 
      bgcolor: 'black',
      border: '1px solid lightblue',
      borderRadius: 2,
      mb: 2
    }}>
      <CardContent>
        <Typography variant="h6" sx={{ 
          color: 'gold',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2
        }}>
          <WhatshotIcon /> Trending Topics
        </Typography>
        <List>
          {topics.map((topic, index) => (
            <ListItem 
              key={index} 
              button
              onClick={() => handleTopicClick(index)}
              sx={{ 
                '&:hover': { 
                  bgcolor: 'rgba(255,165,0,0.1)',
                  cursor: 'pointer'
                }
              }}
            >
              <ListItemIcon>
                <TrendingUpIcon sx={{ color: 'lightblue' }} />
              </ListItemIcon>
              <ListItemText 
                primary={topic.title}
                secondary={`${topic.views} views`}
                sx={{
                  '& .MuiListItemText-primary': { color: 'lightblue' },
                  '& .MuiListItemText-secondary': { color: 'gold' }
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PopularTopics; 