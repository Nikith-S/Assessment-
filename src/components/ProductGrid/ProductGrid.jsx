import React from 'react';
import './ProductGrid.css';
import ProductCard from './ProductCard';
import aries from '../../assets/images/aries.jpeg';
import puretablet from '../../assets/images/puretablet.jpeg';
import nordic from '../../assets/images/nordic.jpg';
import allergy from '../../assets/images/allergy.jpeg';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Arterosil HP by Calroy 60 capsules',
      price: 'Rs. 99.00',
      brand: 'Arterosil',
      image: aries // Using imported image
    },
    {
      id: 2,
      name: 'Allergy Research Group Nattokinase',
      price: 'Rs. 115.99',
      brand: 'Allergy Research Group',
      image: allergy // Using imported image
    },
    {
      id: 3,
      name: 'Nordic Naturals ProOmega 2000',
      price: 'Rs. 84.00',
      brand: 'Nordic Naturals',
      image: nordic // Using imported image
    },
    {
      id: 4,
      name: 'Pure Encapsulations Magnesium (glycinate)',
      price: 'Rs. 62.44 - Rs. 112.99',
      brand: 'Pure Encapsulations',
      image: puretablet // Using imported image
    }
  ];

  return (
    <section className="product-grid">
      <h2 className="section-title">Featured Products</h2>
      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;