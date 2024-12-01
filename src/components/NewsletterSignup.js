import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    setEmail('');
  };

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
          <MailOutlineIcon /> Stay Updated
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'red',
                '& fieldset': {
                  borderColor: 'red',
                },
                '&:hover fieldset': {
                  borderColor: 'orange',
                },
              },
            }}
          />
          <Button 
            type="submit"
            variant="outlined"
            fullWidth
            sx={{ 
              mt: 2,
              borderColor: 'red',
              color: 'red',
              '&:hover': {
                borderColor: 'orange',
                color: 'orange',
              }
            }}
          >
            Subscribe
          </Button>
        </Box>
      </CardContent>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Thanks for subscribing!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default NewsletterSignup; 