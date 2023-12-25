
const { readFile } = require('fs'); //import file system module
const express = require('express'); //import express module 
const path = require('path');
const app = express();

//for frontend to load file
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/data', (request, response) => {
  const data = [{
    id: '001',
    name:'T-shirt'
  }, {
    id:'010',
    name:'Shorts'
  }, {
    id:'011',
    name:'Cap'
  }];

  response.json(data);
}) 


app.listen(3000, () => console.log('Server on http://localhost:3000'));