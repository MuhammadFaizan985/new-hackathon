import React from 'react';
import './HeroFooter.css';

const HeroFooter = () => {
  return (
    <footer className="hero-footer">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h3 className="hero-title">Never miss a drop</h3>
          <p className="hero-sub">Sign up for exclusive deals, early access, and product news.</p>
        </div>

        <form className="hero-form" onSubmit={e => e.preventDefault()}>
          <input type="email" aria-label="Email" placeholder="Enter your email" className="email-input" />
          <button className="btn primary" type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default HeroFooter;
