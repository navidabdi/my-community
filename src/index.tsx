import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as TribeProvider } from '@tribeplatform/react-sdk';
ReactDOM.render(
  <React.StrictMode>
    <TribeProvider
      config={{
        baseUrl: 'https://app.tribe.so/graphql',
        networkDomain: 'nabiabdi.tribeplatform.com',
        accessToken: localStorage.getItem('accessToken'),
      }}
    >
      <App />
    </TribeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
