import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { TokenContextProvider } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenContextProvider>
        <UserContextProvider>
        <App />
        </UserContextProvider>
      </TokenContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

