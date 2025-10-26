import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => setCartItems(prev => {
    const existing = prev.find(i => i.product.id === product.id);
    return existing ? prev.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) : [...prev, { product, quantity: 1 }];
  });

  const updateQuantity = (productId, change) => setCartItems(prev => prev.map(i => i.product.id === productId ? { ...i, quantity: i.quantity + change } : i).filter(i => i.quantity > 0));

  const removeItem = productId => setCartItems(prev => prev.filter(i => i.product.id !== productId));
  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((a, i) => a + i.quantity, 0);
  const totalPrice = cartItems.reduce((a, i) => a + (i.product.price * i.quantity), 0);

  return (
    <CartContext.Provider value={{ cartItems, totalItems, totalPrice, addToCart, updateQuantity, removeItem, clearCart }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);