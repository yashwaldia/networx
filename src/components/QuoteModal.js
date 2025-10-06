import React, { useState } from 'react';
import './QuoteModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser, faEnvelope, faPhone, faBuilding, faShieldAlt, faHome, faClock, faComments } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const QuoteModal = ({ isOpen, onClose, selectedService = "General Security Services", isProductPage = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: selectedService,
    propertyType: '',
    propertySize: '',
    entryPoints: '',
    contactTime: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!formData.fullName || !formData.email || !formData.phone) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      alert('Please fill in all required fields: Name, Email, and Phone');
      return;
    }

    try {
      const PUBLIC_KEY = "9Idiv5OqmIv8ECJJu";  
      const SERVICE_ID = "service_4no1gwm";   
      const TEMPLATE_ID = "template_g3pd2bk"; 

      emailjs.init(PUBLIC_KEY);

      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not specified',
        service_type: formData.serviceType,
        property_type: formData.propertyType || 'Not specified',
        property_size: formData.propertySize || 'Not specified',
        entry_points: formData.entryPoints || 'Not specified',
        contact_time: formData.contactTime || 'Anytime',
        requirements: formData.requirements || 'No specific requirements mentioned',
        submission_date: new Date().toLocaleDateString('en-IN'),
        submission_time: new Date().toLocaleTimeString('en-IN')
      };

      console.log('Sending email with params:', templateParams);

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      setSubmitStatus('success');
      alert('Quote request sent successfully! We will contact you soon.');
      
      setTimeout(() => {
        setFormData({
          fullName: '', email: '', phone: '', company: '',
          serviceType: selectedService, propertyType: '', propertySize: '',
          entryPoints: '', contactTime: '', requirements: ''
        });
        setSubmitStatus('');
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      alert('Failed to send quote request. Please try again or contact us directly.');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <div className="quote-modal-header">
          <h2>Request a Quote</h2>
          <p>{isProductPage ? "Get a quote for your selected product" : "Get a personalized security solution quote"}</p>
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">
                  <FontAwesomeIcon icon={faUser} />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  <FontAwesomeIcon icon={faPhone} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">
                  <FontAwesomeIcon icon={faBuilding} />
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter company name (optional)"
                />
              </div>
            </div>
          </div>

          {!isProductPage && (
            <div className="form-section">
              <h3>Project Details</h3>
              <p className="form-section-subtitle">Tell us about your security requirement.(*Optional*)</p>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="serviceType">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                  >
                    <option value="CCTV Camera System">CCTV Camera System</option>
                    <option value="Fire Alarm System">Fire Alarm System</option>
                    <option value="Biometric System">Biometric System</option>
                    <option value="Digital Door Lock">Digital Door Lock</option>
                    <option value="EPABX System">EPABX System</option>
                    <option value="PA System">PA System</option>
                    <option value="Complete Security Package">Complete Security Package</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="propertyType">
                    <FontAwesomeIcon icon={faHome} />
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select property type</option>
                    <option value="Residential - Home">Residential - Home</option>
                    <option value="Residential - Apartment">Residential - Apartment</option>
                    <option value="Commercial - Office">Commercial - Office</option>
                    <option value="Commercial - Retail">Commercial - Retail</option>
                    <option value="Industrial - Warehouse">Industrial - Warehouse</option>
                    <option value="Industrial - Factory">Industrial - Factory</option>
                    <option value="Educational Institution">Educational Institution</option>
                    <option value="Healthcare Facility">Healthcare Facility</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="propertySize">Property Size/Area</label>
                  <input
                    type="text"
                    id="propertySize"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleInputChange}
                    placeholder="e.g., 2000 sq ft, 5 BHK, 10 rooms"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="entryPoints">Number of Entry Points</label>
                  <input
                    type="text"
                    id="entryPoints"
                    name="entryPoints"
                    value={formData.entryPoints}
                    onChange={handleInputChange}
                    placeholder="e.g., 2 main doors, 5 windows"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="requirements">
                  <FontAwesomeIcon icon={faComments} />
                  Specific Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Describe your specific security needs, preferred features, or special requirements..."
                ></textarea>
              </div>
            </div>
          )}

          {isProductPage && (
            <div className="form-section">
              <h3>Project Details</h3>
              <p className="form-section-subtitle">You're interested in this specific product</p>
              <div className="form-subtitle">
                <strong>Selected Product:</strong> {selectedService}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="propertySize">Property Size/Area</label>
                  <input
                    type="text"
                    id="propertySize"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleInputChange}
                    placeholder="e.g., 2000 sq ft, 5 BHK, 10 rooms"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="requirements">
                    <FontAwesomeIcon icon={faComments} />
                    Additional Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="Any specific requirements for this product..."
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          <div className="form-section">
            <h3>Contact Preferences</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactTime">
                  <FontAwesomeIcon icon={faClock} />
                  Preferred Contact Time
                </label>
                <select
                  id="contactTime"
                  name="contactTime"
                  value={formData.contactTime}
                  onChange={handleInputChange}
                >
                  <option value="">Select preferred time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Anytime">Anytime</option>
                </select>
              </div>
              <div className="form-group">
              </div>
            </div>
          </div>

          <div className="form-submit">
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Quote request submitted successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Please fill all required fields and try again.
              </div>
            )}
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Request Quote'}
            </button>
            
            <p className="privacy-note">
              🔒 Your information is secure and will only be used to provide you with a personalized quote.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
