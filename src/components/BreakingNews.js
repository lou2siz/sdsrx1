import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  const breakingNews = [
    "BREAKING: Major Development in Local Infrastructure Project",
    "URGENT: Weather Alert for County Residents",
    "LIVE: City Council Emergency Session",
  ];

  return (
    <Grid container sx={{ 
      bgcolor: '#FF0000',
      p: 1,
      alignItems: 'center',
      borderBottom: '2px solid #ADD8E6.'
    }}>
      <Grid item>
        <IconButton sx={{ color: 'black', mr: 1 }}>
          <NotificationsActiveIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
        >
          {breakingNews.map((news, index) => (
            <Typography
              key={index}
              sx={{
                color: 'black',
                fontWeight: 'bold',
                mr: 4,
                textShadow: '1px 1px 1px rgba(255,255,255,0.5)',
                cursor: 'pointer',
                '&:hover': {
                  color: '#ADD8E6'
                }
              }}
            >
              {news}
            </Typography>
          ))}
        </Marquee>
      </Grid>
    </Grid>
  );
};

export default BreakingNews; 