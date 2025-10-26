import React from 'react';
import { useCart } from '/src/context/CartContext.jsx';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <div className="img-wrap"><img src={product.image} alt={product.title} /></div>
      <div className="body">
        <div className="title">{product.title}</div>
        <div className="price">${Number(product.price).toFixed(2)}</div>
        <div className="actions">
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;