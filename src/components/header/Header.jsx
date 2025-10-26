import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '/src/context/CartContext.jsx';
import './Header.css';

const Header = () => {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="app-nav">
      <div className="nav-inner container">
        <div className="brand">My store</div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="nav-toggle"
          onClick={() => setOpen(s => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav-actions ${open ? 'open' : ''}`}>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/cart">Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}</NavLink>
          <NavLink className="nav-link cta" to="/checkout">Checkout</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;