import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrolled / height) * 100;
      setProgress(percentage);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <LinearProgress 
      variant="determinate" 
      value={progress} 
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: 3,
        backgroundColor: 'black',
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'lightblue',
        }
      }}
    />
  );
};

export default ReadingProgress; 