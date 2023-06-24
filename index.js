import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import App from './App';

// Initialize Firebase
firebase.initializeApp({
  // Add your Firebase config here
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
