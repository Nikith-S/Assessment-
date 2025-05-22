import React, { useEffect, useRef, useState } from 'react';
import './TopBrands.css';
import cellcoreLogo from '../../assets/images/cellcore-logo.jpg';
import microlabsLogo from '../../assets/images/microlabs-logo.jpeg';
import pendulumLogo from '../../assets/images/pure-encapsulations.png'; 
import pureLogo from '../../assets/images/pure.png';
import researchedLogo from '../../assets/images/researched-nationalist.png';

const TopBrands = () => {
  const brands = [
    { name: 'Cellcore', image: cellcoreLogo },
    { name: 'Microlabs', image: microlabsLogo },
    { name: 'Pendulum', image: pendulumLogo },
    { name: 'Pure Encapsulations', image: pureLogo },
    { name: 'Researched Nationalist', image: researchedLogo }
  ];

  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Auto-scroll animation for mobile
    const startAnimation = () => {
      if (isMobile && containerRef.current) {
        const container = containerRef.current;
        let animationId;
        let position = 0;
        const speed = 0.5;

        const animate = () => {
          position -= speed;
          if (position <= -container.scrollWidth / 2) {
            position = 0;
          }
          container.style.transform = `translateX(${position}px)`;
          animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationId);
      }
    };

    const cleanup = startAnimation();

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      if (cleanup) cleanup();
    };
  }, [isMobile]);

  return (
    <section className="top-brands">
      <div className="container">
        <h2 className="section-title">Top Brands</h2>
        
        {isMobile ? (
          <div className="mobile-carousel-container">
            <div className="mobile-carousel-track" ref={containerRef}>
              {[...brands, ...brands].map((brand, index) => (
                <div key={`mobile-${index}`} className="brand-card">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="brand-logo"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="desktop-brands-row">
            {brands.map((brand, index) => (
              <div key={`desktop-${index}`} className="brand-card">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="brand-logo"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopBrands;