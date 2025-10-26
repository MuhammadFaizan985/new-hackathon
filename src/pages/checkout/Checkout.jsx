import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '/src/context/CartContext.jsx';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', address: '', city: '', zip: '' });

  if (!cartItems || cartItems.length === 0) return (
    <div className="text-center p-5 border rounded shadow-sm bg-warning text-dark">
      <h2>Your Cart is Empty!</h2>
      <p className="lead">Please add items before checking out.</p>
      <button className="btn btn-dark mt-3" onClick={() => navigate('/')}>Go Shopping</button>
    </div>
  );

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Order placed successfully by ${formData.name}! Total: $${totalPrice.toFixed(2)}`);
    clearCart();
    navigate('/');
  };

  return (
    <div className="checkout-grid">
      <div className="checkout-form">
        <h4>Shipping Information</h4>
        <div className="form-group">
          <label>Full Name</label>
          <input name="name" onChange={handleChange} className="form-control" required placeholder="Enter your full name"/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" onChange={handleChange} className="form-control" required placeholder="Enter your email"/>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input name="address" onChange={handleChange} className="form-control" required placeholder="Enter your address"/>
        </div>
        <div className="form-group">
          <label>City</label>
          <input name="city" onChange={handleChange} className="form-control" required placeholder="Enter your city"/>
        </div>
        <button className="btn btn-success mt-3 w-100" onClick={handleSubmit}>Confirm Order & Pay</button>
      </div>
      <div className="summary-card">
        <h5>Order Summary</h5>
        {cartItems.map(item => (
          <div key={item.product.id} className="line">{item.product.title} <strong>${(item.product.price * item.quantity).toFixed(2)}</strong></div>
        ))}
        <div className="total">Total: <strong className="text-success">${totalPrice.toFixed(2)}</strong></div>
      </div>
    </div>
  );
};

export default Checkout;