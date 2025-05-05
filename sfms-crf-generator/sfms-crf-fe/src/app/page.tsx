"use client";

import React, { useState, useEffect } from 'react';
import CreateCrf from '@/components/crf/createCrf';
import ViewCrf from '@/components/crf/viewCrf';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentRoute(hash || '/');
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderComponent = () => {
    switch (currentRoute) {
      case '/crf':
        return <CreateCrf />;
      case '/getcrf':
        return <ViewCrf />;
      default:
        return <CreateCrf />;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default App;