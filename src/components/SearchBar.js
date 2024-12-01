import React, { useState } from 'react';
import { 
  Paper,
  InputBase,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useArticles } from '../context/ArticleContext';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { allArticles } = useArticles();

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.length > 2) {
      const results = allArticles.filter(article => 
        article.title.toLowerCase().includes(term) || 
        article.content.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'black',
          border: '1px solid red',
          '&:hover': { border: '1px solid orange' }
        }}
      >
        <InputBase
          sx={{ 
            ml: 1, 
            flex: 1,
            color: 'red',
            '&::placeholder': { color: 'rgba(255,0,0,0.7)' }
          }}
          placeholder="Search local news..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton sx={{ p: '10px', color: 'red' }}>
          <SearchIcon />
        </IconButton>
      </Paper>

      {searchResults.length > 0 && (
        <Paper sx={{ 
          mt: 1, 
          maxHeight: 300, 
          overflow: 'auto',
          bgcolor: 'black',
          border: '1px solid red'
        }}>
          <List>
            {searchResults.map((result, index) => (
              <React.Fragment key={index}>
                <ListItem 
                  button
                  sx={{ 
                    '&:hover': { bgcolor: 'rgba(255,165,0,0.1)' }
                  }}
                >
                  <ListItemText 
                    primary={result.title}
                    secondary={result.content.substring(0, 100) + '...'}
                    sx={{
                      '& .MuiListItemText-primary': { color: 'orange' },
                      '& .MuiListItemText-secondary': { color: 'red' }
                    }}
                  />
                </ListItem>
                {index < searchResults.length - 1 && (
                  <Divider sx={{ borderColor: 'rgba(255,0,0,0.3)' }} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar; 