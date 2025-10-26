import React from 'react';
import { useCart } from '/src/context/CartContext.jsx';
import './CartItem.css';
import { FaTrashAlt } from 'react-icons/fa';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const product = item?.product ?? { id: 'unknown', title: 'Unknown', price: 0, image: '' };
  const quantity = Number(item?.quantity ?? 0);
  const itemTotalPrice = Number(product.price ?? 0) * quantity;

  return (
    <div className="cart-item">
      <div className="thumb"><img src={product.image} alt={product.title} /></div>
      <div className="meta">
        <h6>{product.title}</h6>
        <small>${Number(product.price ?? 0).toFixed(2)} each</small>
      </div>
      <div className="controls">
        <div className="qty">
          <button onClick={() => updateQuantity(product.id, -1)} disabled={quantity<=1}>-</button>
          <div className="count">{quantity}</div>
          <button onClick={() => updateQuantity(product.id, 1)}>+</button>
        </div>
        <div className="item-total">${Number(itemTotalPrice ?? 0).toFixed(2)}</div>
        <button className="remove-button" onClick={() => removeItem(product.id)} aria-label="Remove"><FaTrashAlt/></button>
      </div>
    </div>
  );
};

export default CartItem;
