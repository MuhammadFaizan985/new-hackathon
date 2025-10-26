import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '/src/context/CartContext.jsx';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';

function App(){
  return (
    <Router>
      <CartProvider>
        <Header />
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;