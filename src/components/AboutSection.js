import React from "react";
import "./AboutSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShieldAlt, 
  faCheckCircle, 
  faBuilding, 
  faBriefcase, 
  faFileAlt, 
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-icon">
          <FontAwesomeIcon icon={faShieldAlt} />
        </div>
        <h2>About Evis Security Networx</h2>
        
        <div className="about-content">
          {/* Left Column - EXACTLY AS YOUR ORIGINAL CODE */}
          <div className="about-left">
            <h3>Professional Security Systems Installation</h3>
            
            <p>
              <strong>Evis Security Networx</strong> is a leading wholesaler and supplier of 
              comprehensive security solutions in <em>New Delhi NCR</em>.
              We specialize in cutting-edge security technologies including <strong>CCTV surveillance systems</strong>, 
              <strong>fire alarm systems</strong>, <strong>biometric access control</strong>, and 
              <strong> smart digital door locks</strong>. Our commitment to quality and customer satisfaction 
              has made us the preferred choice for security solutions.
            </p>
            <div className="about-services">
              <div className="service-item">
                <FontAwesomeIcon icon={faCheckCircle} className="about-small-icon" />
                <span>Comprehensive Security Solutions</span>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faCheckCircle} className="about-small-icon" />
                <span>Professional Installation and Support</span>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faCheckCircle} className="about-small-icon" />
                <span>24/7 Technical Assistance</span>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faCheckCircle} className="about-small-icon" />
                <span>Competitive Wholesale Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column - ONLY CHANGES HERE */}
          <div className="about-right">
            {/* Company Logo Section - NEW */}
            <div className="company-logo-section">
              <img 
                src="/logo512.png" 
                alt="Evis Security Networx Logo" 
                className="company-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback" style={{display: 'none'}}>
                <div className="logo-text">EVIS</div>
                <div className="logo-subtitle">Security Networx</div>
              </div>
            </div>

            <h3>Company Information</h3>
            
            <div className="business-info">
              {/* Row 1: Nature of Business + Business Type */}
              <div className="info-row">
                <div className="info-item">
                  <FontAwesomeIcon icon={faBuilding} className="info-icon" />
                  <div className="info-content">
                    <strong>Nature of Business</strong>
                    <span>Wholesaler & Supplier</span>
                  </div>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faBriefcase} className="info-icon" />
                  <div className="info-content">
                    <strong>Business Type</strong>
                    <span>Security Systems Dealer</span>
                  </div>
                </div>
              </div>

              {/* Row 2: Established + GST Number */}
              <div className="info-row">
                <div className="info-item">
                  <FontAwesomeIcon icon={faCalendarAlt} className="info-icon" />
                  <div className="info-content">
                    <strong>Established</strong>
                    <span>Since 2005</span>
                  </div>
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faFileAlt} className="info-icon" />
                  <div className="info-content">
                    <strong>GST Number</strong>
                    <span>07AFTPJ5684B1Z5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
