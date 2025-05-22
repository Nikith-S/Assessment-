import React from 'react';
import './DealOfTheDay.css';
import aries from '../../assets/images/aries.jpeg';
import puretablet from '../../assets/images/puretablet.jpeg';
import nordic from '../../assets/images/nordic.jpg';
import allergy from '../../assets/images/allergy.jpeg';

const DealOfTheDay = () => {
  const deals = [
    {
      id: 1,
      name: 'Arterosil HP by Calroy 60 capsules',
      price: 'Rs. 99.00',
      originalPrice: 'Rs. 150.00',
      brand: 'Arterosil',
      image: aries,
      discount: '34% OFF'
    },
    {
      id: 2,
      name: 'Allergy Research Group Nattokinase',
      price: 'Rs. 115.99',
      originalPrice: 'Rs. 175.00',
      brand: 'Allergy Research Group',
      image: allergy,
      discount: '34% OFF'
    },
    {
      id: 3,
      name: 'Nordic Naturals ProOmega 2000',
      price: 'Rs. 84.00',
      originalPrice: 'Rs. 149.99',
      brand: 'Nordic Naturals',
      image: nordic,
      discount: '44% OFF'
    },
    {
      id: 4,
      name: 'Pure Encapsulations Magnesium (glycinate)',
      price: 'Rs. 62.44',
      originalPrice: 'Rs. 112.99',
      brand: 'Pure Encapsulations',
      image: puretablet,
      discount: '45% OFF'
    },
    {
      id: 5,
      name: 'Pure Encapsulations O.N.E Multivitamin',
      price: 'Rs. 175.00',
      originalPrice: 'Rs. 250.00',
      brand: 'Pure Encapsulations',
      image: puretablet,
      discount: '30% OFF'
    }
  ];

  return (
    <section className="deal-of-the-day">
      <div className="section-header">
        <h2 className="section-title">Deal of the Day</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="deal-cards-container">
        {deals.map(deal => (
          <div key={deal.id} className="deal-card">
            <div className="deal-image-container">
              {deal.discount && <span className="deal-badge">{deal.discount}</span>}
              <img 
                src={deal.image} 
                alt={deal.name} 
                className="deal-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'image-fallback';
                  fallback.textContent = deal.brand;
                  e.target.parentNode.appendChild(fallback);
                }}
              />
            </div>
            <div className="deal-info">
              <h3 className="deal-name">{deal.name}</h3>
              <p className="deal-brand">{deal.brand}</p>
              <div>
                <span className="deal-price">{deal.price}</span>
                {deal.originalPrice && (
                  <span className="deal-original-price">{deal.originalPrice}</span>
                )}
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealOfTheDay;