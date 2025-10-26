import React, { useState, useEffect } from 'react';
import ProductCard from '/src/components/product/ProductCard.jsx';
import HeroFooter from '/src/components/hero-footer/HeroFooter.jsx';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setPriceRange(Math.ceil(Math.max(...data.map(p => p.price))));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => setFilteredProducts(products.filter(p => p.price <= priceRange)), [products, priceRange]);

  if (loading) return (
    <div className="text-center my-5">
      <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
      <p className="mt-2">Loading products...</p>
    </div>
  );

  return (
    <div>
  {/* page hero area (kept as-is) */}
      <h2 className="mb-4">All Products</h2>
      <div className="mb-4 p-3 bg-light rounded shadow-sm">
        <label htmlFor="priceRange" className="form-label">Filter by Price: ${Number(priceRange).toFixed(2)} (Showing {filteredProducts.length} items)</label>
        <input type="range" className="form-range" id="priceRange" min="0" max={Math.ceil(Math.max(0, ...products.map(p => p.price)))} value={priceRange} onChange={e => setPriceRange(Number(e.target.value))} />
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  {/* extra hero-style footer */}
  <HeroFooter />
    </div>
  );
};

export default Home;