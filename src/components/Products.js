import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faFireExtinguisher,
  faFingerprint,
  faLock,
  faPhone,
  faVolumeUp,
  faWifi,
  faShieldAlt,
  faVideo,
  faBell,
  faArrowRight,
  faHome
} from "@fortawesome/free-solid-svg-icons";

const allProducts = [
  {
    id: 1,
    icon: faCamera,
    title: "CCTV Camera",
    description: "Advanced surveillance cameras with HD recording, night vision, and remote monitoring capabilities for comprehensive security coverage.",
    features: ["HD 4MP Resolution", "Night Vision Technology", "Remote Mobile Access", "Motion Detection Alerts"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Surveillance"
  },
  {
    id: 2,
    icon: faFireExtinguisher,
    title: "Fire Alarm System",
    description: "Comprehensive fire detection and alarm systems with smoke sensors, heat detectors for early warning and safety protection.",
    features: ["Smoke Detection", "Heat Sensors", "Auto Emergency Alert", "24/7 Monitoring"],
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Fire Safety"
  },
  {
    id: 3,
    icon: faFingerprint,
    title: "Biometric System",
    description: "Advanced fingerprint and facial recognition systems for secure access control with attendance management features.",
    features: ["Fingerprint Scanner", "Face Recognition", "Access Control", "Attendance Management"],
    image: "https://images.unsplash.com/photo-1586092918161-2d8882ab35b6?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Access Control"
  },
  {
    id: 4,
    icon: faLock,
    title: "Digital Door Lock",
    description: "Smart digital locks with keypad, RFID card access, and mobile app integration for keyless entry solutions.",
    features: ["Keypad Access", "RFID Cards", "Mobile App Control", "Auto Lock Feature"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Access Control"
  },
  {
    id: 5,
    icon: faPhone,
    title: "EPABX System",
    description: "Professional telephone systems for business communication with call management, recording and intercom facilities.",
    features: ["Multi-line Support", "Call Recording", "Intercom System", "Auto Attendant"],
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Communication"
  },
  {
    id: 6,
    icon: faVolumeUp,
    title: "PA System",
    description: "Public address and sound systems for clear announcements, background music and zone-wise audio control.",
    features: ["Crystal Clear Audio", "Zone Control", "Wireless Microphones", "Background Music"],
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Communication"
  },
  {
    id: 7,
    icon: faWifi,
    title: "Wireless Security Camera",
    description: "Battery-powered wireless cameras with cloud storage and mobile alerts for flexible security monitoring.",
    features: ["Wireless Connectivity", "Cloud Storage", "Mobile Alerts", "Battery Powered"],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Surveillance"
  },
  {
    id: 8,
    icon: faShieldAlt,
    title: "Access Control Panel",
    description: "Centralized access control systems for managing multiple entry points with advanced user management.",
    features: ["Multi-door Control", "User Management", "Time Scheduling", "Audit Trail"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Access Control"
  },
  {
    id: 9,
    icon: faVideo,
    title: "NVR System",
    description: "Network Video Recorder systems for storing and managing footage from multiple IP cameras.",
    features: ["Multi-channel Recording", "Remote Viewing", "Motion Detection", "Backup Storage"],
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Surveillance"
  },
  {
    id: 10,
    icon: faBell,
    title: "Burglar Alarm",
    description: "Comprehensive burglar alarm systems with motion sensors, door/window contacts, and sirens.",
    features: ["Motion Sensors", "Door/Window Sensors", "Siren Alerts", "Mobile Notifications"],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&h=300&q=80",
    category: "Security Alarms"
  }
];

function Products() {
  const handleBackHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="products-page">
      {/* Simple Navbar */}
      <nav className="products-navbar">
        <div className="navbar-content">
          <div className="navbar-brand">
            <img src="/logo.png" alt="Evis Security Networks" className="navbar-logo" />
          </div>
          <button className="back-home-btn" onClick={handleBackHome}>
            <FontAwesomeIcon icon={faHome} />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="products-hero">
        <div className="container">
          <h1>Our Complete Product Range</h1>
          <p>Explore our comprehensive collection of security solutions designed for homes and businesses</p>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="products-content">
        <div className="container">
          <div className="products-grid-full">
            {allProducts.map((product) => (
              <div key={product.id} className="product-card-full">
                <div className="product-image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                  <div className="product-icon-overlay">
                    <FontAwesomeIcon icon={product.icon} />
                  </div>
                  <div className="product-category">{product.category}</div>
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
        </div>
      </div>
    </div>
  );
}

export default Products;
