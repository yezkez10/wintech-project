import React, { useState, useEffect } from 'react';

function ProductDetails({ productId }) {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const apiUrl = `http://localhost:4028/api/products/` + productId;

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch product details. Status: ${response.status}`);
        }
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productDetails) {
    return <p>Error loading product details</p>;
  }

  return (
    <div>
      <h2>{productDetails.title}</h2>
      <p>{productDetails.description}</p>
      <p>Price: ${productDetails.price}</p>
    </div>
  );
};

export default ProductDetails;