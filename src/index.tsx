import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as TribeProvider } from '@tribeplatform/react-sdk';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <TribeProvider
      config={{
        baseUrl: 'https://app.tribe.so/graphql',
        networkDomain: 'nabiabdi.tribeplatform.com',
        accessToken: localStorage.getItem('accessToken'),
      }}
    >
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </TribeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
