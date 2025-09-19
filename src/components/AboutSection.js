import React from "react";
import "./AboutSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShieldAlt, 
  faCheckCircle, 
  faBuilding, 
  faGavel, 
  faUserTie, 
  faMapMarkerAlt,
  faCertificate,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
<section className="about-section" id="about" aria-label="About Evis Security Networks">
  <div className="container">
    <header>
      <h2>About Evis Security Networx</h2>
      <p className="section-subtitle">Leading Security Solutions Provider in Delhi NCR Since 2010</p>
    </header>
    
    <article className="about-content">
      <div className="about-left">
        <h3>Professional Security Systems Installation</h3>
        <p>
          <strong>Evis Security Networx</strong> is a leading wholesaler and supplier of 
          comprehensive security solutions in <em>New Delhi NCR</em>. We specialize in 
          <strong> CCTV cameras</strong>, <strong>fire alarm systems</strong>, 
          <strong>biometric systems</strong>, and <strong>digital door locks</strong>.
        </p>
            <div className="about-services">
              <div className="service-item">
                <FontAwesomeIcon icon={faCheckCircle} className="about-small-icon" />
                <span>Comprehensive Security Solutions</span>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faCheckCircle} className="about-small-icon" />
                <span>Professional Installation & Support</span>
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
          
          {/* Right Column - Business Information */}
          <div className="about-right">
            <h3>Company Information</h3>
            
            <div className="business-info">
              <div className="info-item">
                <FontAwesomeIcon icon={faBuilding} className="info-icon" />
                <div className="info-content">
                  <strong>Nature of Business</strong>
                  <span>Wholesaler & Supplier</span>
                </div>
              </div>             
              <div className="info-item">
                <FontAwesomeIcon icon={faUserTie} className="info-icon" />
                <div className="info-content">
                  <strong>Business Type</strong>
                  <span>Security Systems Dealer</span>
                </div>
              </div>
              
              <div className="info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                <div className="info-content">
                  <strong>Service Area</strong>
                  <span>Delhi NCR & North India</span>
                </div>
              </div>
              
              <div className="info-item">
                <FontAwesomeIcon icon={faCertificate} className="info-icon" />
                <div className="info-content">
                  <strong>GST Number</strong>
                  <span>07AFTPJ5684B1Z5</span>
                </div>
              </div>
              
              <div className="info-item">
                <FontAwesomeIcon icon={faCalendarAlt} className="info-icon" />
                <div className="info-content">
                  <strong>Established</strong>
                  <span>Since 2005</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
