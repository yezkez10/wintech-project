// Import required modules
const { readFile } = require('fs'); //import file system module
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//for frontend to load file
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware setup
app.use(morgan('tiny')); // Log incoming HTTP requests

// Load environment variables
require('dotenv/config');

// Define the API URL constant from environment variables
const api = process.env.API_URL;

// Route to get product data
app.get(`${api}/products`, (req, res) => {
    // Sample product data
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some_url',
    };
    res.send(product);
});

// Route to handle data sent from the frontend (POST request)
app.post(`${api}/products`, (req, res) => {
    // Data received from the frontend in the request body
    const newProduct = req.body;
    console.log(newProduct); // Log the received data to the console
    res.send(newProduct);
});

// Route for the root path
app.get('/', (req, res) => {
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
    
    res.json(data);
    
});

// MongoDB Connection setup
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB successfully connected!');
    })
    .catch((err) => {
        console.log(err);
    });

// Start the server on port 3000
app.listen(3000, () => {
    console.log(api);
    console.log('Server is running http://localhost:3000');
});
