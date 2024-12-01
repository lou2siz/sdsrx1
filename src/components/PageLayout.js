import React, { useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { useArticles } from '../context/ArticleContext';
import ArticleTemplate from './ArticleTemplate';
import SearchBar from './SearchBar';
import BreakingNews from './BreakingNews';
import NewsletterSignup from './NewsletterSignup';
import PopularTopics from './PopularTopics';
import QuickNav from './QuickNav';

const PageLayout = ({ title, articles, category }) => {
  const { addArticles } = useArticles();

  useEffect(() => {
    addArticles(articles, category);
  }, [articles, category, addArticles]);

  return (
    <>
      <BreakingNews />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" sx={{ marginBottom: 2 }}>
              <img src="/logox1.jpg" alt="Logo" style={{ height: 80 }} />
            </Grid>
            <Typography variant="h4" gutterBottom sx={{ 
              color: 'orange',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              textAlign: 'center',
              fontFamily: 'Space Grotesk',
              fontWeight: 700
            }}>
              {title}
            </Typography>
            <SearchBar />
            <QuickNav />
          </Grid>
          
          <Grid item xs={12} md={8}>
            {articles.map((article, index) => (
              <ArticleTemplate key={index} article={article} />
            ))}
          </Grid>
          
          <Grid item xs={12} md={4}>
            <PopularTopics />
            <NewsletterSignup />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PageLayout; 