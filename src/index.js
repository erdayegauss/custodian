import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { TransactionsProvider } from "./context/TransactionContext";

import { AuthProvider } from './contexts/AuthProvider';

ReactDOM.render(

  <React.StrictMode>
    <ContextProvider>
        <TransactionsProvider>
            <App />
        </TransactionsProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
