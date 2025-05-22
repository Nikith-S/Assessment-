import React from 'react';
import './HealthConcerns.css';
import kidneycare from '../../assets/images/kidneycare.jpeg';
import livercare from '../../assets/images/livercare.jpeg';
import stomachcare from '../../assets/images/stomachcare.jpeg';
import heartcare from '../../assets/images/heartcare.jpeg';
import bonesjointscare from '../../assets/images/bonesjointscare.jpeg';

const HealthConcerns = () => {
  const concerns = [
    { name: 'Heart Care', image: heartcare },
    { name: 'Stomach Care', image: stomachcare },
    { name: 'Liver Care', image: livercare },
    { name: 'Bone, Joint & Muscle Care', image: bonesjointscare },
    { name: 'Kidney Care', image: kidneycare },
  ];

  return (
    <section className="health-concerns">
      <h2 className="section-title">Shop by Health Concerns</h2>
      <div className="concerns-wrapper">
        <div className="concerns-grid">
          {concerns.map((concern, index) => (
            <div key={index} className="concern-card">
              <div className="image-container">
                <img 
                  src={concern.image} 
                  alt={concern.name}
                  className="concern-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="image-fallback">{concern.name}</div>
              </div>
              <div className="concern-name">{concern.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthConcerns;