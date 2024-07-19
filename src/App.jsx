import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart';
import ProductDetails from './components/Products';
import ProductList from './components/ProductList';
import SearchFilter from './components/SearchFilter';
import Checkout from './components/Checkout';
import Products from './components/Products';
import Navbar from './components/Navbar';
const Home = () => (
  <div>
    <SearchFilter />
    <ProductList />
  </div>
);

const Product = () => (
  <div>
    <Products />
  </div>
);

const CartPage = () => (
  <div>
    <Cart cartItems={[]} />
  </div>
);

const CheckoutPage = () => (
  <div>
    <Checkout />
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
