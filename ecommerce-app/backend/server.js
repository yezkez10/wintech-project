const express = require('express'); //import express module 

const app = express();
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yezkez10:jfjn30703@ecommercedb.eibg6ip.mongodb.net/?retryWrites=true&w=majority');

const ProductModel = require('./models/Products')

app.get('/getProducts', (req, res) => {
  ProductModel.find()
  .then(products => res.json(products))
  .catch(err => res.json(err))
})

app.listen(3000, () => console.log('Server on http://localhost:3000'));