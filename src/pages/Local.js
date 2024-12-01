// src/pages/Local.js

import React from 'react';
import PageLayout from '../components/PageLayout';

const Local = () => {
  const articles = [
    {
      title: 'Community Center Renovation Complete',
      content: 'After months of work, the newly renovated community center opens its doors...',
      date: '2023-10-15',
    },
    {
      title: 'Local Heroes Recognized',
      content: 'Three residents were honored at city hall for their outstanding community service...',
      date: '2023-10-14',
    }
  ];

  return (
    <PageLayout 
      title="San Francisco Freedom Times"
      articles={articles.map((article, index) => ({
        ...article,
        index
      }))}
      category="general"
    />
  );
};

export default Local;
