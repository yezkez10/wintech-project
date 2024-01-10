import React, { useState, useEffect } from 'react';

function ProductDetails({ productId }) {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:4028/api/products/` + productId;

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  // Render the product details
  return (
    <div>
      <h2>{productDetails.title}</h2>
      <p>{productDetails.description}</p>
      <p>Price: ${productDetails.price}</p>
    </div>
  );
};

export default ProductDetails;