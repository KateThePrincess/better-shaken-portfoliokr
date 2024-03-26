import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position='top-center'
      autoClose={2000}
      hideProgressBar='true'
      closeButton={false}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'space-around',
        padding: '20px',
        color: 'var(--primary-500)',
      }}
    />
    <App />
  </React.StrictMode>
);
