import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
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
      borderRadius: 2
    }}>
      <CardContent>
        <Typography variant="h6" sx={{ 
          color: 'orange',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2
        }}>
          <MailOutlineIcon /> Newsletter
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                color: 'red',
                '& fieldset': {
                  borderColor: 'red',
                },
                '&:hover fieldset': {
                  borderColor: 'orange',
                },
              }
            }}
          />
          <Button 
            type="submit"
            variant="outlined"
            fullWidth
            sx={{
              color: 'red',
              borderColor: 'red',
              '&:hover': {
                borderColor: 'orange',
                color: 'orange'
              }
            }}
          >
            Subscribe
          </Button>
        </form>
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