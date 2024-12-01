// src/pages/Local.js

import React from 'react';
import PageLayout from '../components/PageLayout';

const Local = () => {
  const articles = [
    {
      title: 'Community Garden Flourishes',
      content:
        'The new community garden has become a hub for local residents...',
      date: '2023-10-03',
    },
    {
      title: 'Local School Wins Award',
      content:
        'Congratulations to the students and staff for their outstanding achievements...',
      date: '2023-10-07',
    },
  ];

  return <PageLayout title="Local News" articles={articles} category="local" />;
};

export default Local;
