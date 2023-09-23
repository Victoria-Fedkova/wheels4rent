import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.jsx';
import './index.css';
import GlobalStyle from './styles/globalStyles';
import { persistor, store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename="/wheels4rent">
          <GlobalStyle />
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
