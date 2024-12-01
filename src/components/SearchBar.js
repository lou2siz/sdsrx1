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
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { allArticles } = useArticles();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = allArticles.filter(article =>
      article.title.toLowerCase().includes(term) ||
      article.content.toLowerCase().includes(term)
    );

    setSearchResults(results);
  };

  const handleArticleClick = (index) => {
    setSearchTerm('');
    setSearchResults([]);
    navigate(`/article/${index}`);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', mb: 2 }}>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'black',
          border: '1px solid blue',
        }}
      >
        <InputBase
          sx={{ 
            ml: 1, 
            flex: 1,
            color: 'light blue',
            '&::placeholder': {
              color: 'light blue',
              opacity: 0.7
            }
          }}
          placeholder="Search local news..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton sx={{ p: '10px', color: 'light blue' }}>
          <SearchIcon />
        </IconButton>
      </Paper>

      {searchResults.length > 0 && (
        <Paper
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 1000,
            mt: 1,
            bgcolor: 'black',
            border: '1px solid blue',
            maxHeight: '300px',
            overflow: 'auto'
          }}
        >
          <List>
            {searchResults.map((result, index) => (
              <React.Fragment key={index}>
                <ListItem 
                  button 
                  onClick={() => handleArticleClick(index)}
                  sx={{
                    '&:hover': {
                      bgcolor: 'rgba(255,165,0,0.1)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={result.title}
                    secondary={result.date}
                    sx={{
                      '& .MuiListItemText-primary': { color: 'blue' },
                      '& .MuiListItemText-secondary': { color: 'gold' }
                    }}
                  />
                </ListItem>
                {index < searchResults.length - 1 && <Divider sx={{ bgcolor: 'blue' }} />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar; 