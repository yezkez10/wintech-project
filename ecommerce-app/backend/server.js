// Import required modules
const fs = require('fs/promises');
const express = require('express');
const app = express();

app.get('/', (req, response) => {
  response.send('This is where the server runs');
})

app.get('/api', (req, response) => {
  response.send('This is the main api page');
})

app.get('/api/products', async (req, response) => {
  try {
    const data = await fs.readFile('products.json', 'utf-8');
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    response.send(parsedData);
  } catch (error) {
    console.error('Error reading or parsing file:', error);
    response.status(500).json({ error: 'Internal Server Error in api/products' });
  }
});

  app.get('/api/products/:productId', async (req, res) => {
    try {
      const productsData = await fs.readFile('products.json', 'utf-8');
      const products = JSON.parse(productsData);
      console.log('Products parse complete');
      //console.log('Parsed Products:', products);

      const productId = req.params.productId;
      console.log('Received request for productId:', productId);
      const product = products.find(product => product.id === parseInt(productId, 10));
      console.log('Found Product:', product);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error in api/products/1' });
    }
  });



// Start the server on port 4028
app.listen(4028, () => {
  console.log('Server is running on http://localhost:4028');
  console.log('API is on http://localhost:4028/api');
  console.log('Data is on http://localhost:4028/api/products');
});
