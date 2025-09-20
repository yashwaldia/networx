import React, { useState } from "react";
import "./FooterSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';

function FooterSection() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate required fields
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Use your existing EmailJS configuration
      const result = await emailjs.send(
        'service_4no1gwm', // Replace with your EmailJS service ID
        'template_g3pd2bk', // Replace with your EmailJS template ID
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          phone: contactForm.phone,
          message: contactForm.message,
          form_type: 'Footer Contact Form'
        },
        '9Idiv5OqmIv8ECJJu' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus('Message sent successfully! We\'ll get back to you soon.');
        setContactForm({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="footer-section">
      {/* Map and Contact Form Section */}
      <div className="footer-enhanced">
        {/* Left Side - Google Map */}
        <div className="footer-map-container">
          <h3 className="footer-section-title">
            <FontAwesomeIcon icon={faLocationDot} />
            Visit Our Office
          </h3>
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.3662712753148!2d77.25110867210842!3d28.554434614615708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26d8f6aec0b%3A0x24583c30bb321274!2sEvis%20Security%20Networx!5e0!3m2!1sen!2sin!4v1758351242790!5m2!1sen!2sin" 
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Evis Security Networx Office Location"
            ></iframe>
          </div>
          <div className="office-address">
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              <strong>Evis Security Networx</strong><br />
              L.G Floor, 407-A, Sant Nagar,<br />
              East of Kailash, New Delhi, Delhi 110065
            </p>
          </div>
        </div>

        {/* Right Side - Quick Contact Form */}
        <div className="footer-contact-form">
          <h3 className="footer-section-title">
            <FontAwesomeIcon icon={faPaperPlane} />
            Quick Contact
          </h3>
          
          <form onSubmit={handleSubmit} className="footer-form">
            <div className="form-groupp">
              <FontAwesomeIcon icon={faUser} className="form-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={contactForm.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-groupp">
              <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={contactForm.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-groupp">
              <FontAwesomeIcon icon={faPhone} className="form-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={contactForm.phone}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-groupp">
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="4"
                value={contactForm.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" disabled={isSubmitting} className="footer-submit-btn">
              <FontAwesomeIcon icon={faPaperPlane} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus && (
              <div className={`submit-status ${submitStatus.includes('success') ? 'success' : 'error'}`}>
                {submitStatus}
              </div>
            )}
          </form>

          {/* Quick Contact Info */}
          <div className="quick-contact-info">
            <p><FontAwesomeIcon icon={faPhone} /> +91 98765 43210</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> evisnetworx@yahoo.com</p>
          </div>
        </div>
      </div>

      {/* Traditional Footer Content */}
      <div className="footer-main">
        <div className="footer-brand">
          <img src="logo512.png" alt="Evis Security Networx" />
          <div className="footer-address">
            <p>Professional Security Solutions<br />for Modern Businesses</p>
          </div>
        </div>
        
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-copy">
        <p>&copy; 2025 Evis Security Networx. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
