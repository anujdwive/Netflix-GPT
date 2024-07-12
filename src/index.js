import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Why we use <React.StrictMode>? 
  // When you aplly <React.StrictMode> so you get some api and most another things call two time in console only for local host but in production only for one time.
  // And it is run two time in local host because if any inconsistancy in code so we can resolve before production build 
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
