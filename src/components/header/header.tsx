import React from 'react';
import type { FC } from 'react';

const AppHeader: FC = () => {
  return (
    <header className="App-header" data-testid="app.header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  );
};

export default AppHeader;
