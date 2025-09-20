import React from "react";
import Navbar from "./components/Navbar";
import StickyContact from "./components/StickyContact";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ClientLogos from "./components/ClientLogos"; // Import new component
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StickyContact />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ClientLogos /> {/* Replace QuoteBanner with ClientLogos */}
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;
