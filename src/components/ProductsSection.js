import React, { useState } from "react";
import "./ProductsSection.css";
import QuoteModal from "./QuoteModal";
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
    image: "cctv.png",
    popular: true
  },
  {
    id: 2,
    icon: faFireExtinguisher,
    title: "Fire Alarm System",
    description: "Comprehensive fire detection systems with smoke sensors, heat detectors for early warning protection.",
    features: ["Smoke Detection", "Heat Sensors", "Auto Emergency Alert", "24/7 Monitoring"],
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9Yq9RtSvCTufEFIkacf0BC4FVd8pIQYxyc9LtBC64i4Hza4TvPkFgAYSuxCRieArMH67vgVVvz8N0ZbrdT0cQcYdnFZzJURC0sgCAIDLc"
  },
  {
    id: 3,
    icon: faFingerprint,
    title: "Biometric System",
    description: "Advanced fingerprint and facial recognition systems for secure access control and attendance management.",
    features: ["Fingerprint Scanner", "Face Recognition", "Access Control", "Attendance Management"],
    image: "https://4.imimg.com/data4/KG/FL/MY-6886566/biometric-attendance-system-gprs-wifi-500x500.jpg"
  },
  {
    id: 4,
    icon: faLock,
    title: "Digital Door Lock",
    description: "Smart digital locks with keypad, RFID card access, and mobile app integration for keyless entry.",
    features: ["Keypad Access", "RFID Cards", "Mobile App Control", "Auto Lock Feature"],
    image: "https://yaleonline.in/cdn/shop/products/100Nxt.11000p_d71e89a0-549b-43ff-aa1c-2c382e82af1c.jpg?v=1740809044"
  },
  {
    id: 5,
    icon: faPhone,
    title: "EPABX System",
    description: "Professional telephone systems for business communication with call management and recording features.",
    features: ["Multi-line Support", "Call Recording", "Intercom System", "Auto Attendant"],
    image: "ebax.png"
  },
  {
    id: 6,
    icon: faVolumeUp,
    title: "PA System",
    description: "Public address systems for clear announcements, background music and zone-wise audio control.",
    features: ["Crystal Clear Audio", "Zone Control", "Wireless Microphones", "Background Music"],
    image: "pa.png"
  }
];

function ProductsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleViewAllProducts = () => {
    window.open('/products.html', '_blank');
  };

  const handleGetQuote = (productTitle) => {
    setSelectedService(productTitle);
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <section className="products-section">
        <div className="container">
          <h2>Our Products & Services</h2>
          <p className="products-subtitle">Comprehensive security solutions for homes and businesses</p>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className={`product-card ${product.popular ? 'popular' : ''}`}>
                {product.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
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

                  <button 
                    className="product-btn"
                    onClick={() => handleGetQuote(product.title)}
                  >
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

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedService={selectedService}
        isProductPage={false}
      />
    </>
  );
}

export default ProductsSection;
