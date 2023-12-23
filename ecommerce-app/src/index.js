import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

reportWebVitals();

const { readFile } = require('fs'); //import file system module
const express = require('express'); //import express module 
const app = express();

app.get('/', (request, response) => {
  readFile('./index.html', 'utf-8', (err, html) => {
      if (err) {
          response.status(500).send('Sorry, something went wrong.');
      }
      response.send(html);
  })

});