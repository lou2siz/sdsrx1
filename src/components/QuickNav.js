import React from 'react';
import { Paper, Chip, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalNewsIcon from '@mui/icons-material/Newspaper';
import ArtIcon from '@mui/icons-material/Palette';
import PoliticsIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import JusticeIcon from '@mui/icons-material/Gavel';
import EventsIcon from '@mui/icons-material/Event';

const QuickNav = () => {
  const navigate = useNavigate();
  
  const categories = [
    { label: 'News', icon: <LocalNewsIcon />, path: '/' },
    { label: 'Art', icon: <ArtIcon />, path: '/local-art' },
    { label: 'Politics', icon: <PoliticsIcon />, path: '/local-politics' },
    { label: 'Business', icon: <BusinessIcon />, path: '/local-business' },
    { label: 'Justice', icon: <JusticeIcon />, path: '/local-justice' },
    { label: 'Events', icon: <EventsIcon />, path: '/local-events' }
  ];

  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 2, 
        bgcolor: 'transparent',
        border: '1px solid lightblue',
        mb: 3
      }}
    >
      <Typography variant="subtitle2" sx={{ color: 'gold', mb: 1 }}>
        Quick Navigation
      </Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
        {categories.map((category) => (
          <Chip
            key={category.label}
            icon={category.icon}
            label={category.label}
            onClick={() => navigate(category.path)}
            sx={{
              color: 'light blue',
              border: '1px solid blue',
              '&:hover': {
                color: 'gold',
                border: '1px solid gold',
              }
            }}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default QuickNav; 