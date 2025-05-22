import React from 'react';
import './ContentSection.css';
import healthImage from '../../assets/images/healthpicture.png'; 

const ContentSection = () => {
  return (
    <section className="lorem-section">
      {/* Decorative elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      
      <div className="section-container">
        <div className="text-content">
          <h2 className="lorem-heading">Lorem ipsum heading main patterns</h2>
          <p className="lorem-content">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
            penatibus et magnis dis parturient montes, nascetur ridiculus 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium 
            quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
            rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis 
            eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean 
            leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          </p>
          <a href="#" className="cta-button">Know more</a>
        </div>
        
        <div className="image-content">
          <img 
            src={healthImage} 
            alt="Health and wellness" 
            className="lorem-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;