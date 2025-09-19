import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleViewAllProducts = () => {
    // Open products page in new tab
    window.open('/products.html', '_blank');
    setIsProductsDropdownOpen(false);
  };

  const products = [
    { name: "CCTV Camera", href: "/products#cctv" },
    { name: "Fire Alarm System", href: "/products#fire-alarm" },
    { name: "Biometric System", href: "/products#biometric" },
    { name: "Digital Door Lock", href: "/products#door-lock" }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-main">
        <img src="logo.png" alt="Evis Security Networks" className="navbar-logo" />
        
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li className="navbar-dropdown">
              <a 
                href="#products" 
                onClick={(e) => {
                  e.preventDefault();
                  toggleProductsDropdown();
                }}
              >
                Products
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`dropdown-arrow ${isProductsDropdownOpen ? 'open' : ''}`} 
                />
              </a>
              <div className={`dropdown-menu ${isProductsDropdownOpen ? 'show' : ''}`}>
                {products.map((product, index) => (
                  <a 
                    key={index} 
                    href={product.href}
                    className="dropdown-item"
                    onClick={() => setIsProductsDropdownOpen(false)}
                  >
                    {product.name}
                  </a>
                ))}
                <button 
                  className="dropdown-item view-all"
                  onClick={handleViewAllProducts}
                >
                  View All Products
                </button>
              </div>
            </li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <a href="#quote" className="navbar-cta desktop-cta">Let's Talk</a>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li>
              <button 
                className="mobile-nav-products"
                onClick={() => {
                  handleViewAllProducts();
                  closeMobileMenu();
                }}
              >
                Products
              </button>
            </li>
            <li><a href="#faq" onClick={closeMobileMenu}>FAQ</a></li>
            <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            <li><a href="#quote" className="mobile-cta" onClick={closeMobileMenu}>Let's Talk</a></li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
