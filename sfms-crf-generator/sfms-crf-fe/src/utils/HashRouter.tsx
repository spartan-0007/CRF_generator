'use client';

import React, { useState, useEffect } from 'react';
import ChangeRequestForm from '@/app/crf/page';
import ViewCRFPage from '@/app/getcrf/page';

const HashRouter = () => {
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    const handleRouting = () => {
      const hash = window.location.hash.replace('#', '') || '';

      if (hash) {
        setCurrentRoute(hash);
        return;
      }

      const path = window.location.pathname;
      if (path === '/getcrf') {
        setCurrentRoute('/getcrf');
      } else if (path === '/crf' || path === '/') {
        setCurrentRoute('/crf');
      } else {
        setCurrentRoute('/crf');
      }
    };

    handleRouting();
    window.addEventListener('hashchange', handleRouting);
    window.addEventListener('popstate', handleRouting);

    return () => {
      window.removeEventListener('hashchange', handleRouting);
      window.removeEventListener('popstate', handleRouting);
    };
  }, []);

  const renderComponent = () => {
    switch(currentRoute) {
      case '/crf':
        return <ChangeRequestForm />;
      case '/getcrf':
        return <ViewCRFPage />;
      default:
        return <ChangeRequestForm />;
    }
  };

  return (
    <div>
      <div style={{ padding: '10px', background: '#f0f0f0', marginBottom: '10px' }}>
        <a href="#/crf">CRF Form</a> | <a href="#/getcrf">View CRF</a>
      </div>
      {renderComponent()}
    </div>
  );
};

export default HashRouter;