import React from 'react';
import './global.css';

import { AuthProvider } from './contexts/auth';

import Routes from './routes';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
