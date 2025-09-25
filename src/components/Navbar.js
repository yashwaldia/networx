// import React, { useState } from "react";
// import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const toggleProductsDropdown = () => {
//     setIsProductsDropdownOpen(!isProductsDropdownOpen);
//   };

//   const handleViewAllProducts = () => {
//     // Open products page in new tab
//     window.open('/products.html', '_blank');
//     setIsProductsDropdownOpen(false);
//   };
  
//   const products = [
//     { name: "CCTV Camera", href: "/products#cctv" },
//     { name: "Fire Alarm System", href: "/products#fire-alarm" },
//     { name: "Biometric System", href: "/products#biometric" },
//     { name: "Digital Door Lock", href: "/products#door-lock" }
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar-main">
//         <img src="logo.png" alt="Evis Security Networks" className="navbar-logo" />
        
//         {/* Desktop Navigation */}
//         <div className="desktop-nav">
//           <ul className="navbar-links">
//             <li><a href="#hero">Home</a></li>
//             <li><a href="#about">About</a></li>
            
//             <li><a href="#faq">FAQ</a></li>
//             <li><a href="#testimonials">Testimonials</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
        
//         <a href="#quote" className="navbar-cta desktop-cta">Let's Talk</a>

//         {/* Mobile Menu Button */}
//         <button 
//           className="mobile-menu-btn" 
//           onClick={toggleMobileMenu}
//           aria-label="Toggle mobile menu"
//         >
//           <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
//         </button>

//         {/* Mobile Dropdown Menu */}
//         <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
//           <ul className="mobile-nav-links">
//             <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
//             <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
//             <li>
//               <button 
//                 className="mobile-nav-products"
//                 onClick={() => {
//                   handleViewAllProducts();
//                   closeMobileMenu();
//                 }}
//               >
//                 Products
//               </button>
//             </li>
//             <li><a href="#faq" onClick={closeMobileMenu}>FAQ</a></li>
//             <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
//             <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
//             <li><a href="#quote" className="mobile-cta" onClick={closeMobileMenu}>Let's Talk</a></li>
//           </ul>
//         </div>

//         {/* Mobile Menu Overlay */}
//         {isMobileMenuOpen && (
//           <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import QuoteModal from "./QuoteModal"; // ✅ NEW: Import QuoteModal

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false); // ✅ NEW: State for QuoteModal

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

  // ✅ NEW: Function to open QuoteModal
  const handleLetsTalk = () => {
    setIsQuoteModalOpen(true);
    closeMobileMenu(); // Close mobile menu if open
  };

  // ✅ NEW: Function to close QuoteModal
  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const products = [
    { name: "CCTV Camera", href: "#products-section" },
    { name: "Fire Alarm System", href: "#products-section" },
    { name: "Biometric System", href: "#products-section" },
    { name: "Digital Door Lock", href: "#products-section" }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-main">
          <img src="logo512.png" alt="Evis Security Networks" className="navbar-logo" />
          
          {/* Desktop Navigation */}
          <ul className="navbar-links desktop-nav">
            <li><a href="#hero" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
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
            <li><a href="#faq" onClick={closeMobileMenu}>FAQ</a></li>
            <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
          
          {/* ✅ UPDATED: Let's Talk button with onClick */}
          <button onClick={handleLetsTalk} className="navbar-cta desktop-cta">
            Let's Talk
          </button>
          
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li>
              <button
                onClick={() => {
                  handleViewAllProducts();
                  closeMobileMenu();
                }}
                className="mobile-nav-products"
              >
                Products
              </button>
            </li>
            <li><a href="#faq" onClick={closeMobileMenu}>FAQ</a></li>
            <li><a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            
            {/* ✅ UPDATED: Mobile Let's Talk button with onClick */}
            <li>
              <button onClick={handleLetsTalk} className="mobile-cta">
                Let's Talk
              </button>
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </nav>

      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        selectedService="General Security Consultation"
        isProductPage={false}
      />
    </>
  );
}

export default Navbar;
