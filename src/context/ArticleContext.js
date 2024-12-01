import React, { createContext, useContext, useState } from 'react';

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [allArticles, setAllArticles] = useState([]);
  const [articlesByCategory, setArticlesByCategory] = useState({});

  const addArticles = (articles, category) => {
    setAllArticles(prev => {
      const filtered = prev.filter(article => 
        !articles.some(newArticle => newArticle.title === article.title)
      );
      return [...filtered, ...articles];
    });

    setArticlesByCategory(prev => ({
      ...prev,
      [category]: articles
    }));
  };

  return (
    <ArticleContext.Provider value={{ allArticles, articlesByCategory, addArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => useContext(ArticleContext); 