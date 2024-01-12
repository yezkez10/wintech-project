// Import required modules
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, response) => {
  response.send('This is where the server runs');
})

app.get('/api', (req, response) => {
  response.send('This is the main api page');
})

app.get('/api/data', (req, response) => {
  try {
    const data = JSON.parse(fs.readFileSync('sample_supplies.json', 'utf-8'));
    response.send(data);
  } catch (error) {
    console.error('Error reading or parsing file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
})


// Start the server on port 4028
app.listen(4028, () => {
    console.log('Server is running on http://localhost:4028');
    console.log('API is on http://localhost:4028/api');
    console.log('Data is on http://localhost:4028/api/data');
});
