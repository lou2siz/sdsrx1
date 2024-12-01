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

const PopularTopics = () => {
  const topics = [
    { title: 'City Development', views: '2.5K' },
    { title: 'Local Sports', views: '2.1K' },
    { title: 'Education', views: '1.8K' },
    { title: 'Community Events', views: '1.5K' },
  ];

  return (
    <Card sx={{ 
      bgcolor: 'black',
      border: '1px solid red',
      borderRadius: 2,
      mb: 2
    }}>
      <CardContent>
        <Typography variant="h6" sx={{ 
          color: 'orange',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2
        }}>
          <WhatshotIcon /> Trending Topics
        </Typography>
        <List>
          {topics.map((topic, index) => (
            <ListItem key={index} sx={{ 
              '&:hover': { 
                bgcolor: 'rgba(255,165,0,0.1)',
                cursor: 'pointer'
              }
            }}>
              <ListItemIcon>
                <TrendingUpIcon sx={{ color: 'red' }} />
              </ListItemIcon>
              <ListItemText 
                primary={topic.title}
                secondary={`${topic.views} views`}
                sx={{
                  '& .MuiListItemText-primary': { color: 'red' },
                  '& .MuiListItemText-secondary': { color: 'orange' }
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