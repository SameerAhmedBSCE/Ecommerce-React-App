import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchProductById(id);
      setProduct(product);
    };
    getProduct();
  }, [id]);

  return product ? (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add to cart button here */}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductDetails;
