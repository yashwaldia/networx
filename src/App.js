import React from "react";
import Navbar from "./components/Navbar";
import StickyContact from "./components/StickyContact";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import QuoteBanner from "./components/QuoteBanner";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div>
      <Navbar />
      <StickyContact />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <QuoteBanner />
      <FooterSection />
    </div>
  );
}

export default App;
