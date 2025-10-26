import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import CartItem from '../../components/cart-item/CartItem.jsx';
import './Cart.css';

const Cart = () => {
  const { cartItems, totalPrice, totalItems } = useCart();
  if (!cartItems || cartItems.length === 0) return (
    <div className="empty-cta card p-4 text-center">
      <h2>Your Shopping Cart is Empty</h2>
      <p className="muted">Time to find some great products!</p>
      <Link to="/" className="btn btn-primary mt-3">Go Shopping</Link>
    </div>
  );

  const safeTotalItems = Number(totalItems ?? cartItems.length);
  const safeTotalPrice = Number(totalPrice ?? 0);

  return (
    <div className="cart-page">
      <h2 className="mb-4">Your Cart ({safeTotalItems} Items)</h2>
      <div className="cart-grid">
        <div className="cart-list">
          {cartItems.map((item, index) => item && item.product ? <CartItem key={item.product.id ?? index} item={item} /> : null)}
        </div>
        <div className="summary">
          <h5>Order Summary</h5>
          <hr />
          <div className="totals"><span>Total Items:</span><span className="amount">{safeTotalItems}</span></div>
          <div className="totals"><span>Total Price:</span><span className="amount">${safeTotalPrice.toFixed(2)}</span></div>
          <Link to="/checkout" className="btn btn-success w-100 mt-3">Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;