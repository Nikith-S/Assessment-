import React from 'react';
import './Membership.css';

const Membership = () => {
  return (
    <section className="membership-section">
      <div className="membership-content">
        <h2>Care Plan</h2>
        <p className="price">now starting at Rs. 165 for 3 months</p>
        <p className="benefits">
          Get extra 5% saving on your orders. Free shipping, same-day delivery and more.
        </p>
        <button className="join-btn">Become a member today!</button>
      </div>
    </section>
  );
};

export default Membership;