import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Why shop with us?</li>
            <li>Secure Website</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Shipping</h3>
          <ul>
            <li>PCI Compliance</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Security & Privacy</h3>
          <ul>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div className="footer-section newsletter">
          <h3>Subscribe</h3>
          <p>Invite customers to join your mailing list.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email address" />
            <button>Sign up</button>
          </div>
        </div>
      </div>
      
      <div className="footer-disclaimer">
        <p>
          *Statements made on this website have not been evaluated by the U.S. 
          Food and Drug Administration. These products are not intended to 
          diagnose, treat, cure or prevent any disease. Information provided by 
          this website or this company is not a substitute for individual medical 
          advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;