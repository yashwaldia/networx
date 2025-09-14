import React from "react";
import "./ProductsSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faFireExtinguisher,
  faFingerprint,
  faLock,
  faPhone,
  faVolumeUp,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    icon: faCamera,
    title: "CCTV Camera",
    description: "Advanced HD surveillance cameras with night vision, motion detection, and remote monitoring capabilities.",
    features: ["HD 4MP Resolution", "Night Vision Technology", "Remote Mobile Access", "Motion Detection Alerts"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&h=400&q=80",
    popular: true
  },
  {
    id: 2,
    icon: faFireExtinguisher,
    title: "Fire Alarm System",
    description: "Comprehensive fire detection systems with smoke sensors, heat detectors for early warning protection.",
    features: ["Smoke Detection", "Heat Sensors", "Auto Emergency Alert", "24/7 Monitoring"],
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: 3,
    icon: faFingerprint,
    title: "Biometric System",
    description: "Advanced fingerprint and facial recognition systems for secure access control and attendance management.",
    features: ["Fingerprint Scanner", "Face Recognition", "Access Control", "Attendance Management"],
    image: "https://images.unsplash.com/photo-1586092918161-2d8882ab35b6?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: 4,
    icon: faLock,
    title: "Digital Door Lock",
    description: "Smart digital locks with keypad, RFID card access, and mobile app integration for keyless entry.",
    features: ["Keypad Access", "RFID Cards", "Mobile App Control", "Auto Lock Feature"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: 5,
    icon: faPhone,
    title: "EPABX System",
    description: "Professional telephone systems for business communication with call management and recording features.",
    features: ["Multi-line Support", "Call Recording", "Intercom System", "Auto Attendant"],
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    id: 6,
    icon: faVolumeUp,
    title: "PA System",
    description: "Public address systems for clear announcements, background music and zone-wise audio control.",
    features: ["Crystal Clear Audio", "Zone Control", "Wireless Microphones", "Background Music"],
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=400&h=400&q=80"
  }
];

function ProductsSection() {
  const handleViewAllProducts = () => {
    window.open('/products.html', '_blank');
  };

  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2>Our Products & Services</h2>
        <p className="products-subtitle">
          Comprehensive security solutions for homes and businesses
        </p>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className={`product-card ${product.popular ? 'popular' : ''}`}>
              {product.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="product-image">
                <img src={product.image} alt={product.title} loading="lazy" />
                <div className="product-icon-overlay">
                  <FontAwesomeIcon icon={product.icon} />
                </div>
              </div>
              
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <button className="product-btn">
                  Get Quote
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more-section">
          <button className="view-more-btn" onClick={handleViewAllProducts}>
            View All Products
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <p>Explore our complete range of security solutions</p>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
