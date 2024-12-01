import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Collapse
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter an email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically make an API call to save the email
    setShowSuccess(true);
    setError('');
    setEmail('');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
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
          <MailOutlineIcon /> Newsletter Signup
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'lightblue', mb: 2 }}>
          Stay updated with our latest local news and stories!
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                color: 'lightblue',
                '& fieldset': {
                  borderColor: 'lightblue',
                },
                '&:hover fieldset': {
                  borderColor: 'gold',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'gold',
                },
              },
            }}
          />
          
          <Button 
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              color: 'lightblue',
              borderColor: 'lightblue',
              '&:hover': {
                borderColor: 'gold',
                color: 'gold',
              },
            }}
          >
            Subscribe
          </Button>
        </Box>

        <Collapse in={!!error}>
          <Alert 
            severity="error" 
            sx={{ 
              mt: 2,
              bgcolor: 'transparent',
              color: 'lightblue',
              border: '1px solid lightblue'
            }}
          >
            {error}
          </Alert>
        </Collapse>

        <Collapse in={showSuccess}>
          <Alert 
            severity="success"
            sx={{ 
              mt: 2,
              bgcolor: 'transparent',
              color: 'gold',
              border: '1px solid gold'
            }}
          >
            Thank you for subscribing!
          </Alert>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup; 