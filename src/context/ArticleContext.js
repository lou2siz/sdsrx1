import React, { createContext, useContext, useState } from 'react';

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [allArticles, setAllArticles] = useState([]);

  const addArticles = (articles, category) => {
    const articlesWithCategory = articles.map(article => ({
      ...article,
      category
    }));
    setAllArticles(prev => [...prev, ...articlesWithCategory]);
  };

  return (
    <ArticleContext.Provider value={{ allArticles, addArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => useContext(ArticleContext); 