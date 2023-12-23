
const { readFile } = require('fs'); //import file system module
const express = require('express'); //import express module 
const app = express();

app.get('/getData', (request, response) => {
  readFile('./index.html', 'utf-8', (err, html) => {
      if (err) {
          response.status(500).send('Sorry, something went wrong.');
      }
      response.send(html);
  })
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));
