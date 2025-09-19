import React from "react";
import "./FooterSection.css";

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-main container">
        <div className="footer-brand">
          <div className="footer-address">
            Sant Nagar, East of Kailash, Delhi<br/>
            <a href="mailto:info@evisnetworks.com">info@evisnetworks.com</a> | 
            <a href="tel:+919873300755">+919873300755</a>
          </div>
        </div>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#"><span role="img" aria-label="Facebook">🌐</span></a>
          <a href="#"><span role="img" aria-label="Twitter">🐦</span></a>
          <a href="#"><span role="img" aria-label="LinkedIn">🔗</span></a>
        </div>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} Evis Networx. All Rights Reserved.<br/>
        Design & Development by Evis Networx.
      </div>
    </footer>
  );
}

export default FooterSection;
